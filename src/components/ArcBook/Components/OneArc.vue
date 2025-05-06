<template>
    <div class="one-book-container-wrapper one-arc-container-wrapper margin-2vh-0 display-flex-row flex-one">
        <div class="display-flex-row flex-one">
            <card-image-background v-bind:Image="background">                
            </card-image-background>
        </div>
        <div id="arc-container" class="one-arc-container border-none background-color-main-lineart flex-one card display-flex-column width-140-vh height-90-vh padding-2-vh">
            <CardHeader v-bind:Title="arc.Title">
                <router-link to="/ArcBookLayout" class="btn btn-primary">Retour à la liste des arcs</router-link>
            </CardHeader>
            <div class="card-body width-135-vh height-80-vh padding-2-vh margin-2vh-0">
                <div class="row">
                    <div class="col-12">
                        <p class="white-text font-variant-all-small-caps poppins-text font-size-1-25">Résumé</p>
                        <p class="white-text text-align-justify Noto-Sans" v-html="arc.Summary"></p>
                        <div  class="display-flex-row">
                            <div v-for="(books, index) in arc.Books" :key="index">
                                <p class="white-text display-flex-column">
                                    <img class="image-book border-radius-2vh-0-0-2vh height-20-vh" :src="books.Image" />
                                    <router-link class="white-text" :to="'/BookByTitle/' + books.Title">
                                        {{ books.Title }}
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ArcBookService from '../../../services/ArcBookService';
import CardHeader from '../../Components/GenericComponent/CardHeader.vue';
import cardImageBackground from "../../Components/GenericComponent/cardImageBackground.vue";
export default {
    name: 'OneArc',
    components:{
        cardImageBackground,
        CardHeader
    },
    data(){
        return{
            url: null,
            background: null,
            arc:{}
        }
    },
    created(){
        this.url = this.$route.params.id;
        this.GetArcByName(this.url)
    },
    methods:{
        GetArcByName(id){
            ArcBookService.GetArcByName(id)
            .then((response) => {
                console.log(response.data.ob)
                this.arc = response.data.ob
                this.background = response.data.ob.IllustrationOne
            })            
            .catch((e) => {
            console.log(e);
            });
        }
    }
}
</script>