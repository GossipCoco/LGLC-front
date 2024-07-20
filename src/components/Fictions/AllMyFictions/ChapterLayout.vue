<template>
    <div class="character-details-chatper card mb-3 fiction-container">
        <div v-if="chapter && chapter.Title">
            <div class="card-header">
                <div class="chapter-title-content">
                    <h1 class="chapter-title">
                        {{ chapter.Title }}
                    </h1>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <div style="color: white" v-for="(illustration, index) in AllIillustrations" :key="index">
                            <div style="height: 150px; width: 150px;">
                                <img :src="'/images/Fictions/' + illustration.IllustrationId"
                                    :alt="illustration.IllustrationId" style="height: 150px; width: 150px;" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="chapter-button-content">
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
                            <router-link :to="'/fiction/' + chapter.Fiction.Title" class="btn btn-primary">
                                Retour à la liste de chapitres
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="chapter-global-content">
                    <div class="chapter-image-content"
                        v-bind:style="{ backgroundImage: 'url(/images/Fictions/' + chapter.Image + ')' }">
                    </div>
                    <div class="chapter-text-content">
                        <p v-html="displayedContent"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FictionService from '../../../services/FictionService'
export default {
    name: 'ChapterLayout',
    data() {
        return {
            usrCurrent: this.$store.state.auth.user.usrID,
            Author: null,
            AuthorId: null,
            chapter: {},
            AllIillustrations: {},
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
    methods: {
        getChapter(id) {
            FictionService.getChapter(id, this.nav)
                .then((response) => {
                    console.log(response.data.ob)
                    this.chapter = response.data.ob || {};
                    this.Author = this.chapter.Fiction.UserId
                    this.AuthorId = this.chapter.Fiction.UserId
                    this.AllIillustrations = this.chapter.ChapterIllustrations
                    this.typeText(this.chapter.Content);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        typeText(text) {
            this.displayedContent = '';
            let index = 0;
            const typingSpeed = 10; // Vitesse de frappe (en millisecondes)
            const typeChar = () => {
                if (index < text.length) {
                    this.displayedContent += text.charAt(index);
                    index++;
                    setTimeout(typeChar, typingSpeed);
                }
            };

            typeChar();
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