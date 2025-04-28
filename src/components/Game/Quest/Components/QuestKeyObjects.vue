<template>
    <div class="card card-object-container" v-for="(object, index) in findobjects" :key="index">
        <div v-if="objectClicked" class="highlight-effect">
            <p>Objet trouvé</p>
        </div>
        <img :src="object.KeyObjectId" @click="checkForKeyObject()" class="key-object-img" :style="{ top: randomTop, left: randomLeft }" />
    </div>    
</template>
<script>
export default {
  name: "QuestKeyObjects",
  props: ["findobjects"],
  data() {
    return {
      objectClicked: false,
      randomTop: '0vh',
      randomLeft: '0vh',
    };
  },
  created() {
    console.log(this.findobjects);
    this.randomTop = `${Math.floor(Math.random() * 70)}vh`;   // Entre 0vh et 70vh
    this.randomLeft = `${Math.floor(Math.random() * 90)}vh`;  // Entre 0vh et 90vh
  },
  methods: {
    checkForKeyObject() {
      this.objectClicked = true;
    },
  },
};
</script>