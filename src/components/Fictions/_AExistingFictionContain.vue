<template>
    <div class="dashboard-max-card-container card fiction-container">
        <div v-for="(contentFiction, index) in fiction" :key="index">
            <div class="card-header fiction-chapter-container">
                <h1>{{ contentFiction.Title }}</h1>
                <h3 >par <router-link :to="'/getUserBy/'+Author" class="author-text"> {{ Author }}</router-link></h3>
            </div>
            <div class="card-body">
                <div class="one-fiction-container">
                    <div class="image-fiction-container" v-bind:style="{ backgroundImage: 'url(/images/Fictions/' + fiction.Image + ')' }"></div>
                    <div class="character-chapters-fiction-container">
                        <p v-for="(user, index) in fiction.Game.UsersGames" :key="index">
                            {{ user.User.UserName }}
                        </p>
                        {{ Summary }}
                        <p v-html="fiction.Summary"></p>                        
                        <p v-for="(character, index) in fiction.Game.GameCharacters" :key="index">
                            <span>
                                {{ character.Character.CurrentName }}<br>
                            </span>
                        </p>
                        <p v-for="(chapter, index) in contentFiction.Chapters" :key="index">
                            <router-link type="button" class="btn btn-primary" :to="'/chapter/' + chapter.Title">
                                {{ chapter.Title }}</router-link>
                        </p>
                        <p  v-for="(user, index) in fiction.Game.UsersGames" :key="index">                            
                            <router-link type="button" class="btn btn-primary" v-if="usrCurrent === user.User.Id"
                                :to="'/fiction/createChapter/' + contentFiction.Id">
                                Créer un chaptitre
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FictionService from "../../services/FictionService"
export default {
    name: 'FictionContain',
    data() {
        return {
            usrCurrent: this.$store.state.auth.user.usrID,
            fiction: {},
            url: null,
            nav: {
                current: 0,
                pages: 0,
                step: 6,
            },
            lastChap: {},
            message: null,
            Author: null,
            Summary: null,
        }
    },
    created() {
        this.url = this.$route.params.id;
        this.getFictionByName(this.url)
    },
    methods: {
        GetLastChapterOfAFiction(id) {
            FictionService.GetLastChapterOfAFiction(id)
                .then((response) => {
                    this.lastChap = response.data.ob
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getFictionByName(id) {
            FictionService.getFictionByName(id, this.nav)
                .then((response) => {
                    this.fiction = response.data.ob;
                    this.Summary = response.data.ob
                    this.Author = this.fiction.Game.UsersGames.User.UserName
                    if (this.fiction.Chapters.length > 0) {
                        this.GetLastChapterOfAFiction(this.url)
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
}
</script>