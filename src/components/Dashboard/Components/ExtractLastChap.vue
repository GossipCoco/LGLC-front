<template>
    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12  card-global">
        <div class="card fiction-card">
            <div class="border-gradient-decoration-bottom"></div>
            <div class="card-header">
                <h4>Mes derniers chapitres</h4>
            </div>
            <div class="card-body">
                <div class="list-all-fictions-globale--container" v-for="(chapter, index) in FiveLastChapters"
                    :key="index">
                    <div class="rond-image-illustration"> <img class="img-fluid" :src="'/images/Fictions/' + chapter.Image" :alt="chapter.Image" />
                    </div>
                    <div class="summaray-title-text">
                        <p>
                            {{ chapter.Fiction.Title }}<br>
                            <router-link :to="'/chapter/' + chapter.Title">
                                {{ chapter.Title }}
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FictionService from '../../../services/FictionService';
export default {
    name: 'ExtractLastChap',
    data() {
        return {
            usr: this.$store.state.auth.user.usrID,
            FiveLastChapters: {},
            Title: null,
            Fiction: null,
        }
    },
    created() {
        this.GetFiveLastChapByUser(this.usr)
    },
    methods: {
        GetFiveLastChapByUser(user) {
            FictionService.GetFiveLastChapByUser(user)
                .then((response) => {                    
                    this.FiveLastChapters = response.data.ob
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}

</script>