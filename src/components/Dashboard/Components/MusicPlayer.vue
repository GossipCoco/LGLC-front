<template>
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card scheduler">
        <TitleHeaderDashboard v-bind:title="'Musique'" v-bind:type="'fictions'"/>
        <div class="card-body scheduler-container">
      <div class="music-player">
        <audio ref="audioPlayer" controls @ended="nextTrack" width="14rem">
          <source :src="currentTrack.url" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div class="controls display-flex-column">
          <button class="btn btn-primary" @click="previousTrack">Précédent</button>
          <button class="btn btn-primary" @click="nextTrack">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
    name: 'MusicPlayer',
    components: {TitleHeaderDashboard},
  data() {
    return {
      // Liste des pistes musicales
      tracks: [
        { name: "Musique 1", url: "/musics/LaTragédiedeFléau.mp3" },
        { name: "Musique 2", url: "/musics/LaTragédiedeFléau(1).mp3" },
        { name: "Musique 3", url: "/musics/LaTragédiedeFléau(2).mp3" },
        { name: "Musique 3", url: "/musics/LaTragédiedeFléau(3).mp3" },
      ],
      currentTrackIndex: 0, // Index de la musique actuelle
    };
  },
  computed: {
    currentTrack() {
      return this.tracks[this.currentTrackIndex];
    },
  },
  methods: {
    nextTrack() {
      this.currentTrackIndex =
        (this.currentTrackIndex + 1) % this.tracks.length;
      this.$refs.audioPlayer.load(); // Recharger le fichier audio
      this.$refs.audioPlayer.play(); // Lire automatiquement la prochaine piste
    },
    previousTrack() {
      this.currentTrackIndex =
        (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
      this.$refs.audioPlayer.load(); // Recharger le fichier audio
      this.$refs.audioPlayer.play(); // Lire automatiquement la piste précédente
    },
  },
};
</script>
<style scoped>
.music-player {
  text-align: center;
  margin-top: 20px;
}

</style>
  