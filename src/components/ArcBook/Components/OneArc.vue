<template>
    <div class="one-book-container-wrapper one-arc-container-wrapper margin-2vh-0">
        <div class="display-flex-row flex-one">
            <card-image-background v-bind:Image="background">                
            </card-image-background>
        </div>
        <div id="arc-container" class="border-none background-color-main-lineart flex-one card display-flex-column height-90-vh padding-2-vh">

        </div>
    </div>
</template>
<script>
import ArcBookService from '../../../services/ArcBookService';

import cardImageBackground from "../../Components/GenericComponent/cardImageBackground.vue";
export default {
    name: 'OneArc',
    components:{
        cardImageBackground
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