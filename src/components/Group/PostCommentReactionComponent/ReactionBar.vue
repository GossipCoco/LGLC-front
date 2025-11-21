<template>
  <div class="reaction-bar display-flex display-flex-row align-items-content-justify-content">
    <!-- réactions courantes -->
    <button
      v-for="r in visibleReactions"
      :key="r.emoji"
      class="chip"
      :class="{ mine: r.reacted }"
      @click="toggleReaction(r.emoji)"
      :title="r.reacted ? 'Retirer ma réaction' : 'Réagir'">
      <span class="emoji">{{ r.emoji }}</span>
      <span class="count">{{ r.count }}</span>
    </button>

    <!-- bouton + -->
    <button class="chip add" @click="togglePicker" title="Ajouter une réaction">＋</button>

    <!-- popover du picker (lazy load) -->
    <teleport to="body">
      <div v-if="showPicker" class="picker-popover" @click.self="closePicker">
        <div class="picker-card" ref="pickerEl">
          <component
            v-if="Picker"
            :is="Picker"
            :data="emojiIndex"
            set="twitter"
            title="Réagir"
            :perLine="8"
            :sheetSize="32"
            :showPreview="false"
            :showSkinTones="false"
            @select="onPick"
          />
          <div v-else class="loading">Chargement…</div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import data from "emoji-mart-vue-fast/data/all.json";
import "emoji-mart-vue-fast/css/emoji-mart.css";
import { EmojiIndex } from "emoji-mart-vue-fast/src"; // léger, sans picker
const emojiIndex = new EmojiIndex(data);

export default {
  name: "ReactionBar",
  props: {
    userId: { type: String, required: true },
    targetType: { type: String, required: true }, // 'post' | 'comment'
    targetId: { type: String, required: true },
    // ex: [{ emoji:'👍', count:3, reacted:true }, ...]
    initialReactions: { type: Array, default: () => [] },
    // pour n’en montrer que quelques-uns
    shortlist: {
      type: Array,
      default: () => ["👍", "❤️", "👏", "🐾", "✨", "🔥"],
    },
  },
  data() {
    return {
      reactions: new Map(), // emoji -> { count, reacted }
      showPicker: false,
      Picker: null,
      emojiIndex,
    };
  },
  computed: {
    visibleReactions() {
      // fabrique un petit tableau pour l’affichage
      return this.shortlist.map(e => {
        const rec = this.reactions.get(e) || { count: 0, reacted: false };
        return { emoji: e, count: rec.count, reacted: rec.reacted };
      }).filter(r => r.count > 0 || this.shortlist.includes(r.emoji));
    },
  },
  created() {
    // hydrate la map
    for (const r of this.initialReactions) {
      this.reactions.set(r.emoji, { count: r.count || 0, reacted: !!r.reacted });
    }
  },
  methods: {
    async ensurePicker() {
      if (this.Picker) return;
      const mod = await import("emoji-mart-vue-fast/src");
      this.Picker = mod.Picker; // lazy load du picker complet
    },
    async togglePicker() {
      this.showPicker = !this.showPicker;
      if (this.showPicker) await this.ensurePicker();
    },
    closePicker() { this.showPicker = false; },

    onPick(emoji) {
      this.closePicker();
      // emoji.native => "😺" etc.
      this.toggleReaction(emoji.native);
    },

    toggleReaction(emoji) {
      const current = this.reactions.get(emoji) || { count: 0, reacted: false };
      const next = { ...current };
      if (current.reacted) {
        next.reacted = false;
        next.count = Math.max(0, next.count - 1);
        this.$emit("unreact", { emoji, targetType: this.targetType, targetId: this.targetId });
      } else {
        next.reacted = true;
        next.count = next.count + 1;
        this.$emit("react", { emoji, targetType: this.targetType, targetId: this.targetId });
      }
      this.reactions.set(emoji, next);
      this.reactions = new Map(this.reactions); // force update
    },
  },
};
</script>

<style scoped>


/* popover plein écran cliquable pour fermer */
.picker-popover{
  position:fixed; inset:0; background:rgba(0,0,0,.25);
  display:flex; align-items:center; justify-content:center; z-index:9999;
}
.picker-card{
  background:#1b2c1b; border:1px solid rgba(255,255,255,.1);
  border-radius:12px; padding:.5rem; max-width:360px; width:100%;
}
/* réduire l’empreinte visuelle du picker */
:global(.emoji-mart){
  width:100% !important; max-width:360px;
  transform: scale(.95); transform-origin: top center;
}
.loading{ color:#fff; padding:1.5rem; text-align:center; }
</style>
