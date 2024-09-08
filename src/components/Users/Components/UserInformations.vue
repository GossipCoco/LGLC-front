<template>
    <div>
        {{ usrInformation }}
    </div>
</template>
<script>
import UserService from '../../../services/UserService';
export default {
    name: 'UserInformations',
    props:['user'],
    data(){
        return{
            usr: this.user,
            usrInformation: {}
        }
    },
    created(){
        this.GetUser(this.user)
        console.log(this.user)
    },
    methods:{
        GetUser(username){
            UserService.GetUserByUsername(username)
            .then((response) => {
                console.log(response.data.ob)
                this.usrInformation = response.data.ob
            })
        .catch((error) => {
          console.error(error);
        });
        }
    }
}
</script>