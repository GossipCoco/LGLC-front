<template>
    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 card-global">
        <div class="card profil-card fiction-card">
            <div class="card-header avatar-container-header">
                <h4>{{ UserName }}</h4> <!-- <div class="avatar-container"><img :src="'/images/Levels/' + level" class="img-fluid card-img-top" alt="avatar"></div> -->
            </div>
            <div class="card-body">
                <!-- <p><span v-if="Role"></span>Role : {{ Role.Name }}</p> -->
                <p>Inscription : {{ formatDate(Inscription) }}</p>
                <p>Dernière connextion : {{ formatDate(LastConnexion) }}</p>
                <p>Vous avez écrit {{ nBFiction }} fictions.</p>
                <p>Vous avez écrit {{ totalWords }} mots.</p>
                <p><router-link type="button" class="btn btn-primary" to="/createANewFiction">Créer une nouvelle fiction</router-link></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AvatarCard',
    props: ['Avatar', 'UserName', 'LastConnexion', 'Inscription', 'level', 'Role', 'nBFiction', 'totalWords'],
    data() {
        return {
            avatar: this.Avatar,
            lev: this.level,
            roleUser: this.Role
        }
    },
    methods: {
        formatDate(isoDateString) {
            if (isoDateString) {
                const date = new Date(isoDateString);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            } else return ""
        },

    }

}
</script>