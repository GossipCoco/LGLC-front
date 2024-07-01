<template>
    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12  card-global">
        <div class="card fiction-card">
            <div class="border-gradient-decoration-bottom"></div>
            <div class="card-header">
                <h4>Lire des fictions</h4>
            </div>
            <div class="card-body">
                <div v-for="(game, index) in fiveGames" :key="index">
                    <div class="list-fictions-dashboard list-all-fictions-globale--container" v-for="(fiction, index) in game.Fiction" :key="index">
                        <div class="rond-image-illustration">
                            <img  class="img-fluid"  :src="'/images/Fictions/' + fiction.Image" :alt="fiction.Image" />
                        </div>
                        <div class="summaray-title-text">
                        <p>
                            <span class="link-to-fiction-text">
                                <router-link :to="'/fiction/' + fiction.Id">
                                    {{ fiction.Title }}
                                </router-link>
                            </span>:
                            <span v-html="truncateText(fiction.Summary, 75)"></span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GameService from '../../../services/GameService';
export default {
    data() {
        return {
            fiveGames: {},
            nav: {
                current: 0,
                pages: 0,
                step:2,
            },
        };
    },
    created() {
        this.GetAllLastFiveGames(this.nav)
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            }
            return text.substring(0, maxLength) + '...';
        },
        GetAllLastFiveGames(nav) {
            GameService.GetAllLastFiveGames(nav)
                .then((response) => {
                    this.fiveGames = response.data.data
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
};
</script>