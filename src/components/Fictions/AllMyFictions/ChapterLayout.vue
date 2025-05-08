<template>
    <div class="character-details-chatper margin-2vh border-none height-100 background-color-main-lineart card mb-3 display-flex-column padding-0">
        <div class="card-header display-flex-row align-items-content-justify-content">
            <div class="chapter-title-content text-white cinzel">
                <h1 class="chapter-title text-white cinzel">
                    {{ chapter.Title }}
                </h1>
            </div>
            <!-- <CreateCommentModal
                v-bind:fanfiction="TitleFiction"
                v-bind:fictionId="FictionId"
                v-bind:chapterId="chapterId"
                v-bind:chapterTitle="chapter.Title"
            /> -->
            <div class="back-to-fiction-btn-container">

                <router-link :to="'/fiction/' + TitleFiction" class="btn btn-primary">
                    Retour à la liste de chapitres
                </router-link>
                <button @click="playForestAudio" class="btn btn-secondary">
                    Activer le son de la forêt
                </button>
                <iframe width="0" height="0"
                 src="https://www.youtube.com/embed/oBGHa-ygyW0?si=CSBc7Vbmg_hFdNfN" 
                 title="YouTube video player" frameborder="0" 
                 allow="autoplay"
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="card-body height-80">
            <div class="row">
                <div class="col-12">
                    <div class="display-flex align-items-content-justify-content chapter-button-content">
                        <button @click="speakText" class="btn btn-primary">
                            Lire à voix haute
                        </button>
                        <router-link type="button" class="btn btn-primary"
                            :to="'/fiction/createChapter/' + chapter.FictionId" v-if="usrCurrent === AuthorId">
                            Créer un chapitre
                        </router-link>
                        <router-link type="button" class="btn btn-primary" :to="'/EditChapter/' + chapter.Id"
                            v-if="usrCurrent === AuthorId">
                            Editer le chapitre
                        </router-link>
                        <router-link
                            v-if="previousChapter"
                            :to="'/chapter/' + encodeURIComponent(previousChapter.Title)"
                            class="btn btn-outline-light"
                            >
                            ◀ Chapitre précédent
                        </router-link>
                        <router-link
                            v-if="nextChapter"
                            :to="'/chapter/' + encodeURIComponent(nextChapter.Title)"
                            class="btn btn-outline-light"
                        >
                            Chapitre suivant ▶
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row chapter-navigation-buttons display-flex-row justify-content-space-between mt-3">
                
            </div>
            <div class="display-flex-row chapter-global-content height-70-vh display-flex width-180-vh">        
                <chapter-image v-bind:ImageChapter="ImageChapter" />
                <chapter-text v-bind:Content="Content" />
            </div>
            
        </div>
    </div>      
</template>
<script>
import FictionService from '../../../services/FictionService'
// import CreateCommentModal from '../Comments/CreateCommentModal.vue';
import ChapterImage from './ChapterImage.vue'
import ChapterText from './ChapterText.vue';
export default {
    name: 'ChapterLayout',
    components: {ChapterImage, ChapterText},
    data() {
        return {
            TitleFiction: null,
            usrCurrent: this.$store.state.auth.user.usrID,
            Author: null,
            AuthorId: null,
            FictionId: null,
            chapterId: null,
            chapter: {},
            AllIillustrations: {},
            AllChapters: [],
            ImageChapter: null,
            Content: null,
            nav: {
                current: 0,
                pages: 0,
                step: 6,
            },
            displayedContent: '',
            partForm1: true,
            patrForm2: false,
            patrForm3: false,
        }
    },
    created() {
        this.getChapter(this.$route.params.id);
    },
    watch: {
        '$route.params.id': function (newId) {
            this.getChapter(newId);
        }
    },
    computed: {
        currentIndex() {
            if (!Array.isArray(this.AllChapters) || this.AllChapters.length === 0) return -1;
            return this.AllChapters.findIndex(chap => chap.Title === this.chapter.Title);
        },
        previousChapter() {
            return this.currentIndex > 0 ? this.AllChapters[this.currentIndex - 1] : null;
        },
        nextChapter() {
            return this.currentIndex >= 0 && this.currentIndex < this.AllChapters.length - 1
            ? this.AllChapters[this.currentIndex + 1]
            : null;
        }
        },
    methods: {
        playForestAudio() {
            const iframe = document.createElement('iframe');
            iframe.src = "https://www.youtube.com/embed/oBGHa-ygyW0?autoplay=1&loop=1&playlist=oBGHa-ygyW0";
            iframe.style.display = "none";
            iframe.allow = "autoplay";
            document.body.appendChild(iframe);
        },
        GetAllChaptersByFiction(id){
            FictionService.GetAllChaptersByFiction(id)
            .then((response) => {
                this.AllChapters = response.data.ob.sort((a, b) => a.NumberChapter - b.NumberChapter);
            })
            .catch((e) => {
                console.log(e);
            });
        },
        getChapter(id) {
            FictionService.getChapter(id, this.nav)
                .then((response) => {
                    console.log(response.data.ob)
                    this.chapter = response.data.ob;
                    this.chapterId = this.chapter.Id;
                    this.ImageChapter = this.chapter.Image;
                    this.Author = this.chapter.Fiction.UserId;
                    this.AuthorId = this.chapter.Fiction.UserId;
                    this.AllIillustrations = this.chapter.ChapterIllustrations;
                    this.TitleFiction = this.chapter.Fiction.Title;
                    this.Content = this.chapter.Content;
                    this.FictionId = this.chapter.Fiction.Id;
                    this.GetAllChaptersByFiction(this.FictionId);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        speakText() {
            const utterance = new SpeechSynthesisUtterance(this.chapter.Content);
            utterance.lang = 'fr-FR';
            speechSynthesis.speak(utterance);
        },
        loadNextChapter() {
            if (this.chapter.NextChapterId) {
                this.getChapter(this.chapter.NextChapterId);
                this.$router.push(`/chapter/${this.chapter.NextChapterId}`);
                location.reload();
            }
        }
    }
}
</script>
