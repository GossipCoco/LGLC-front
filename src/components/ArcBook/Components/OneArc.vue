<template>
    <div class="one-arc-container-wrapper margin-2vh-0">
        <div class="display-flex-row flex-one">

        </div>
    </div>
</template>
<script>
import ArcBookService from '../../../services/ArcBookService';
export default {
    name: 'OneArc',
    data(){
        return{
            url: null,
            arc:{}
        }
    },
    created(){
        this.url = this.$route.params.id;
        this.GetArcByName(this.url)
    },
    methods:{
        GetArcByName(){
            ArcBookService.GetArcByName(id)
            .then((response) => {
                console.log(response.data.ob)
            })            
            .catch((e) => {
            console.log(e);
            });
        }
    }
}
</script>