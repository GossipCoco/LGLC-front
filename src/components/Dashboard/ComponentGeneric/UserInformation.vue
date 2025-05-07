<template>
  <div class="row user-all-information-container padding-0-0-0-4vh">
    <div class="col-7">
      <p class="display-flex-row font-size-0-85" v-for="(info, index) in information" :key="index">
        <span class="label-profil poppins-text text-white flex-one font-size-0-85" v-for="(name, index) in info" :key="index">
          {{ name }}</span
        >
      </p>
    </div>
    <div class="col-5">
      <p class="display-flex-row font-weight-600 font-size-0-85">
        <span>{{ formatDate(Inscription) }}</span>
      </p>
      <p class="display-flex-row font-weight-600 font-size-0-85">
        <span>{{ formatDate(LastConnexion) }}</span>
      </p>
      <p class="display-flex-row font-weight-600 font-size-0-85">
        <span>{{ nBFiction }}</span
        >&nbsp;<span class="text-white poppins-text">fictions</span>
      </p>
      <p class="display-flex-row font-weight-600 font-size-0-85">
        <span> {{ totalWords }}</span
        >&nbsp;<span class="text-white poppins-text font-size-0-85">mots</span>
      </p>
      <p class="display-flex-row font-weight-600 font-size-0-85">
        <span>{{ totalPoints }}</span
        >&nbsp; <span class="text-white poppins-text">points</span>
      </p>
      <p class="display-flex-row font-weight-600 font-size-0-85">
        <span>{{ NbOCs }}</span
        >&nbsp; <span class="text-white poppins-text">personnages</span>
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