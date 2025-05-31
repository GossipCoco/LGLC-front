<template>
    <div>

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