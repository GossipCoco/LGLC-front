<template>
  <div class="rating width-16-vh height-5-vh display-flex-column">
    <div class="display-flex-row">
      <svg
        v-for="star in 5"
        :key="star"
        @click="rate(star)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="14"
        height="14"
        :class="{ checked: star <= currentRating }"
        class="star"
      >
        <path
          d="M12 .587l3.668 7.431L24 9.587l-6 5.852L19.336 24 12 20.201 4.664 24 6 15.439 0 9.587l8.332-1.569z"
        />
      </svg>
    </div>
    <div class="rating-chiffre">
      <h4 class="text-white">{{ parseFloat(rating).toFixed(1) }} / 5</h4>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Config from "../../../../server";
export default {
  props: ["fictionId", "rating"],
  data() {
    return {
      currentRating: this.rating,
    };
  },
  methods: {
    generateRandomId(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    rate(star) {
      const newId = this.generateRandomId(10)
      axios
        .post(Config.Url + "/rating/UpdateRating/" + this.fictionId, {
          Id: this.fictionId + "-" + newId,
          FictionId: this.fictionId,
          Rating: star,
          UserId: this.$store.state.auth.user.usrID,
          DateRated: new Date(),
        })
        .then((response) => {
          this.currentRating = response.data.res;
          if(this.currentRating === true){
            location.reload()
          }
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de la note:", error);
        });
    },
  },
};
</script>