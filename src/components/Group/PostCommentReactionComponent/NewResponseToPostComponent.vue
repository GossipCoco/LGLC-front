<template>
    <div>

    </div>
</template>
<script>
import GroupService from '../../../services/GroupService';
export default {
    name: "NewResponseToPostComponent",
    data() {
        return {
            url: "",
            Group:{},
        };
    },
    created() {
        this.url = this.$route.params.id;
        this.GetGroupByPostId(this.url);
    },
    methods:{
        GetGroupByPostId(id){
            GroupService.GetGroupByPostId(id).then((response)=>{
                this.Group = response.data;
                console.log("Groupe récupéré :", this.Group);
            }).catch((error)=>{
                console.error("Erreur lors de la récupération du groupe :", error);
            });

        }
    }
}
</script>