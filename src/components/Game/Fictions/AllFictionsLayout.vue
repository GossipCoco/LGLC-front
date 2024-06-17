<template>
  <div class="dashboard-max-card-container card fiction-container">
    <div class="card-header">
      <h4>Lire des fictions</h4>
    </div>
    <div class="row list-fiction-card-container">
      <div class="col-3 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-sm-3 mb-3 mb-sm-3"
        v-for="(game, index) in games" :key="index">
        <div class="card mb-3" style="max-width: 440px;" v-for="(fiction, index) in game.Fiction" :key="index">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="image-fiction-container"
                v-bind:style="{ backgroundImage: 'url(/images/Fictions/' + fiction.Image + ')' }">
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title" style="color: black">{{ fiction.Title }}</h5>
                <p class="card-text" style="color: black; font-size: 14px" v-html="truncateText(fiction.Summary, 35)">
                </p>
                <p class="card-text" style="color: black">
                  <small class="text-body-secondary">
                    <router-link class="link-text-a" :to="'/fiction/' + fiction.Id">Lire</router-link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pagination-container">

      <div class="row bottom-top-dashboard">
        <div v-if="showspinner" class="d-flex justify-content-center">
          <div class="spinner-border text-success" role="status">
          </div>
        </div>
      </div>
      <Pagination v-if="!showspinner"  v-bind:nav="nav" v-bind:filters="filters" v-bind:getDatas="'GamesPagination'"
        @GamesPagination="GamesPagination" />
    </div>
  </div>
</template>
<script>
import GameService from '../../../services/GameService'
import functions from '../../../services/functions';
import Pagination from '../../Components/GenericComponent/Pagination.vue';
export default {
  name: 'GameLayout',
  components: { Pagination },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      NbAllMyGamesFictions: null,
      games: {},
      filters: [],
      showspinner: false,
      nav: {
        current: 0,
        pages: 0,
        step: 8,
      },
    };
  },
  created() {
    this.userCurrent = this.usrId;
    this.getAllGames(this.nav, this.filters);
    this.countAllGames()
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    },
    GamesPagination(e) {
      console.log("e", e);
      this.nav.current = e;
      this.getAllGames(this.nav, this.userCurrent, this.filters);
    },
    countAllGames() {
      GameService.CountAllMyFictions(this.$store.state.auth.user.usrID)
        .then((response) => {
          this.NbAllMyGamesFictions = response.data.ob;
          console.log(this.NbAllMyGamesFictions)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllGames(nav) {
      GameService.getAllGamesByUser(this.$store.state.auth.user.usrID, nav)
        .then((response) => {
          this.games = response.data.ob
          console.log(this.games)         
          this.showspinner = false
          return functions.CalcPagination(
            this.NbAllMyGamesFictions,
            this.showPagination,
            this.nav,
            this.loading
          )
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
</script>