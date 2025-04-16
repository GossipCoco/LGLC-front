<template>
  <div class="row user-all-information-container">
    <div class="col-7">
      <p class="display-flex-row">
        <span class="label-profil poppins-text text-white flex-one"
          >Inscription</span
        >
      </p>
      <p class="display-flex-row">
        <span class="label-profil poppins-text text-white flex-one"
          >Dernière connextion</span
        >
      </p>
      <p class="display-flex-row">
        <span class="label-profil poppins-text text-white flex-one"
          >Nb de fictions</span
        >
      </p>
      <p class="display-flex-row">
        <span class="label-profil poppins-text text-white flex-one"
          >Nb de mots écrits</span
        >
      </p>
      <p class="display-flex-row">
        <span class="label-profil poppins-text text-white flex-one"
          >Vous avez</span
        >
      </p>
      <p class="display-flex-row">
        <span class="label-profil poppins-text text-white flex-one"
          >Vous avez</span
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