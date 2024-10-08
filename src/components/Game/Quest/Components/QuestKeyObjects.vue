<template>
    <div class="card card-object-container" v-for="(object, index) in findobjects" :key="index">
        <div v-if="objectClicked" class="highlight-effect">
            <p>Objet trouvé</p>
        </div>
        <img :src="object.KeyObjectId" @click="checkForKeyObject()" class="key-object-img"/>
    </div>    
</template>
<script>
export default {
  name: "QuestKeyObjects",
  props: ["findobjects"],
  data() {
    return {
      objectClicked: false,
    };
  },
  created() {
    console.log(this.findobjects);
  },
  methods: {
    checkForKeyObject() {
      this.objectClicked = true;
    },
  },
};
</script>