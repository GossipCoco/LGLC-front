<template>
  <div class="opacity-container">
    <div class="display-flex-column flex-one all-chapters-list-container">
      <div class="display-flex-column">     
      <p>
        <label class="btn btn-default p-0" for="upload-illustration fiction">
          <input id="upload-illustration fiction" type="file" accept="image/png, image/jpeg, image/jpg, image/webp" ref="file"
                  @change="selectImage" />
        </label>
      </p>
      <p>
        <button class="btn btn-primary" :disabled="!currentImage" @click="upload">
          Changer l'illustration
        </button>
      </p>
    </div>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(chapter, index) in fiction.Chapters"
          :key="index"
        >
          <router-link class="dropdown-item" :to="'/chapter/' + chapter.Title">
            {{ chapter.Title }}
          </router-link>
        </li>
      </ul>
      <p>
        <router-link
          type="button"
          class="btn btn-primary"
          v-if="AuthorId === usrCurrent"
          :to="'/fiction/createChapter/' + IdFiction"
          v-bind="lastChap"
        >
          Créer le chapitre {{ lastChap }}
        </router-link>
      </p>
    </div>
    <div class="summary-container">
      <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" />
      <p v-html="Summary"></p>
    </div>
  </div>
</template>
<script>
import EditSummary from "../FictionsForm/EditSummary.vue"
export default {
  name: "ListOfChapters",
  props: [
    "AuthorId",
    "usrCurrent",
    "IdFiction",
    "lastChap",
    "fiction",
    "Summary",
  ],
  components:{EditSummary},
  data(){
    return{
      NewImage: null,
      currentImage: undefined,
      previewImage: undefined,
    }
  },
  methods:{
    selectImage(){
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    }
  }
};
</script>