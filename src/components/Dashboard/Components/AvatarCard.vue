<template>
    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 card-global">
        <div class="card profil-card fiction-card">
            <div class="card-header avatar-container-header">
                <h4>{{ UserName }}</h4> 
            </div>
            <div class="card-body user-info-text">
                <!-- <p><span v-if="Role"></span>Role : {{ Role.Name }}</p> -->
                <p>Inscription : <span>{{ formatDate(Inscription) }}</span></p>
                <p>Dernière connextion : <span>{{ formatDate(LastConnexion) }}</span></p>
                <p>Vous avez écrit <span>{{ nBFiction }}</span> fictions.</p>
                <p>Vous avez écrit <span>{{ totalWords }}</span> mots.</p>                
                <p>Vous avez <span>{{ totalPoints }}</span> points.</p>
                <p><router-link type="button" class="btn btn-primary" to="/createANewFiction">Créer une nouvelle fiction</router-link></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AvatarCard',
    props: ['Avatar', 'UserName', 'LastConnexion', 'Inscription', 'level', 'Role', 'nBFiction', 'totalWords', 'totalPoints'],
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