<template>
    <div class="dashboard-max-card-container  flex-one  ard display-flex-column fiction-container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4"><h2>Panel administrateur</h2></div>
            <div class="col-"></div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4"><h3>Liste de vos {{ nbUser }} utilisateurs</h3></div>
            <div class="col-"></div>
        </div>
        <div class="row">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">
                        Id
                    </th>
                    <th scope="col">
                        Nom-Prénom
                    </th>
                    <th scope="col">Login</th>
                    <th scope="col">Email</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Inscription</th>
                    <th scope="col">LastConnexion</th>
                    <th scope="col">RoleId</th>
                    <th scope="col">Action</th>

                </tr>

            </thead>
            <tbody>
                <tr v-for="(user, index) in allUsers" :key="index">
                    <th scope="col-1">
                        {{ user.Id }}
                    </th>
                    <th scope="col-1">
                        {{ user.LastName }}
                        {{ user.FirstName }}
                    </th>
                    <th scope="col-1">{{ user.Login }}</th>
                    <th scope="col-1">{{ user.Email }}</th>
                    <th scope="col-1">{{ user.UserName }}</th>
                    <th scope="col-1">{{ formatDate(user.Birthday) }}</th>
                    <th scope="col-1">{{ formatDate(user.Inscription) }}</th>
                    <th scope="col-1">{{ formatDate(user.LastConnexion) }}</th>
                    <th scope="col-1">{{ user.RoleId }}</th>
                    <th scope="col-1"></th>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import UserService from '../../services/UserService';
export default {
    name: 'Administration',
    components: {
    },
    data() {
        return {
            usrId: this.$store.state.auth.user.usrID,
            allUsers: {},
            nbUser: null
        }
    },
    created() {
        const text = "getAllUsers"
        this.getAllUsers(this.usrId, text)
    },
    methods: {
        formatDate(isoDateString) {
            if(isoDateString) {
                const date = new Date(isoDateString);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            }else return ""
        },

        getAllUsers(text) {
            UserService.getAllUsers(text)
                .then(response => {                    
                    this.allUsers = response.data.ob
                    this.nbUser = Object.keys(this.allUsers).length;
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>