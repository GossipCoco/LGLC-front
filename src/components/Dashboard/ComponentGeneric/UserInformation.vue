<template>
  <div class="row user-all-information-container">
    <div class="col-7">
      <p class="display-flex-row" v-for="(info, index) in information" :key="index">
        <span class="label-profil poppins-text text-white flex-one" v-for="(name, index) in info" :key="index">
          {{ name }}</span
        >
      </p>
    </div>
    <div class="col-5">
      <p class="display-flex-row">
        <span>{{ formatDate(Inscription) }}</span>
      </p>
      <p class="display-flex-row">
        <span>{{ formatDate(LastConnexion) }}</span>
      </p>
      <p class="display-flex-row">
        <span>{{ nBFiction }}</span
        >&nbsp;fictions
      </p>
      <p class="display-flex-row">
        <span> {{ totalWords }}</span
        >&nbsp;mots.
      </p>
      <p class="display-flex-row">
        <span>{{ totalPoints }}</span
        >&nbsp; points.
      </p>
      <p class="display-flex-row">
        <span>{{ NbOCs }}</span
        >&nbsp; personnages.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInformation",
  props:['Inscription', 'LastConnexion', 'nBFiction', 'totalWords', 'totalPoints', 'NbOCs'],
  data(){
    return{
      information:[
        {name: 'Inscription'},        
        {name: 'Dernière connextion'},
        {name: 'Nb de fictions'},
        {name: 'Nb de mots écrits'},
        {name: 'Vous avez'},
        {name: 'Vous avez'}
      ]
    }
  },
  methods: {
    formatDate(isoDateString) {
      if (isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
};
</script>