<template>
    <div class="character-details-chatper card mb-3 display-flex-column fiction-container">

            <div class="card-header">
                <div class="chapter-title-content">
                    <h1 class="chapter-title">
                        {{ chapter.Title }}
                    </h1>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <!-- <div class="col-6">
                        <div style="color: white" v-for="(illustration, index) in AllIillustrations" :key="index">
                            <div style="height: 150px; width: 150px;">
                               <img :src=" illustration.IllustrationId"
                                    :alt="illustration.IllustrationId" style="height: 150px; width: 150px;" />
                            </div>
                        </div>
                    </div> -->
                    <div class="col-12">
                        <div class="display-flex chapter-button-content">
                            <CreateCommentModal
                                v-bind:fanfiction="TitleFiction"
                                v-bind:fictionId="FictionId"
                                v-bind:chapterId="chapterId"
                                v-bind:chapterTitle="chapter.Title"/>
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
                            <router-link :to="'/fiction/' + TitleFiction" class="btn btn-primary">
                                Retour à la liste de chapitres
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="display-flex-row chapter-global-content">                   
                    <div class="chapter-image-content"
                        v-bind:style="{ backgroundImage: 'url(' + ImageChapter + ')' }">
                    </div>
                    <div class="chapter-text-content">
                        <p v-html="Content"></p>
                    </div>
                </div>
            </div>
        </div>      
</template>
<script>
import FictionService from '../../../services/FictionService'
import CreateCommentModal from '../Comments/CreateCommentModal.vue';
export default {
    name: 'ChapterLayout',
    components: {CreateCommentModal},
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
            ImageChapter:null,
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
        console.log(this.$route.params.id)
    },
    watch: {
        '$route.params.id': function (newId) {
            this.getChapter(newId);
        }
    },
    methods: {
        getChapter(id) {
            FictionService.getChapter(id, this.nav)
                .then((response) => {
                    this.chapter = response.data.ob;
                    this.chapterId = this.chapter.Id
                    this.ImageChapter = response.data.ob.Image
                    this.Author = this.chapter.Fiction.UserId
                    this.AuthorId = this.chapter.Fiction.UserId
                    this.AllIillustrations = this.chapter.ChapterIllustrations
                    this.TitleFiction = this.chapter.Fiction.Title
                    this.Content = this.chapter.Content
                    this.FictionId = this.chapter.Fiction.Id
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        speakText() {
            const utterance = new SpeechSynthesisUtterance(this.chapter.Content);
            utterance.lang = 'fr-FR'; // Vous pouvez ajuster la langue selon vos besoins
            speechSynthesis.speak(utterance);
        },
        loadNextChapter() {
            if (this.chapter.NextChapterId) {
                this.getChapter(this.chapter.NextChapterId);
                this.$router.push(`/chapter/${this.chapter.NextChapterId}`);
                location.reload()
            }
        }
    }
}
</script>
