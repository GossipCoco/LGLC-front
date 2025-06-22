<template>
    <div id="group-container"
    class="height-80-vh border-none background-color-main-lineart flex-one card display-flex-column
    margin-2vh padding-2-vh">
    <CardHeader v-bind:Title="'Les clubs'" />
    <div class="card-body padding-2-vh height-80-vh"></div>
    </div>
</template>
<script>
import GroupService from '../../services/GroupService';
export default {
    name: 'GroupLayout',
    data(){
        return{
            AllGroups:{}
        }
    },
    created(){
        this.GetAllGroups()
    },
    methods:{
        GetAllGroups(){
            GroupService.GetAllGroups()
                .then((response) => {
                    console.log(response.data.ob)
                })
        .catch((err) => {
          console.error("erreur", err);
        });
        }
    }
}
</script>