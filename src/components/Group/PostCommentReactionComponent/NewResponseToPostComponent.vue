<template>
    <div 
        id="group-details"
        class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto">
        <group-header v-bind:group="InfoGroup" />
    </div>
</template>
<script>
import GroupService from '../../../services/GroupService';
import GroupHeader from '../GroupComponent/GroupHeader.vue';
export default {
    name: "NewResponseToPostComponent",
    components: { GroupHeader },
    data() {
        return {
            url: "",
            Group:{},
            InfoGroup:{}
        };
    },
    created() {
        this.url = this.$route.params.id;
        this.GetGroupByPostId(this.url);
    },
    methods:{
        GetGroupByPostId(id){
            GroupService.GetGroupByPostId(id).then((response)=>{
                console.log("Réponse du service :", response.data.ob);
                this.Group = response.data.ob;
                this.InfoGroup = this.Group.Group;
                console.log("Groupe récupéré :", this.InfoGroup);
            }).catch((error)=>{
                console.error("Erreur lors de la récupération du groupe :", error);
            });

        }
    }
}
</script>