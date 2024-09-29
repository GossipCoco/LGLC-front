<template>
    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 card-global">
        <div class="card display-flex-column profil-card fiction-card">
            <TitleHeaderDashboard v-bind:title="UserName" v-bind:type="'username'"/>
            <div class="card-body user-info-text">
                <p><span class="label-profil">Inscription</span> <span>{{ formatDate(Inscription) }}</span></p>
                <p><span class="label-profil">Dernière connextion</span> <span>{{ formatDate(LastConnexion) }}</span></p>
                <p><span class="label-profil">Vous avez écrit</span> <span>{{ nBFiction }}</span> &nbsp; fictions et &nbsp;<span>{{ totalWords }}</span>&nbsp; mots.</p>
                 <p><span class="label-profil">Vous avez</span> <span>{{ totalPoints }}</span>&nbsp; points.</p>
                <p><span class="label-profil">Mes badges</span></p>
                <div class="display-flex-row">
                    <p>
                        <img :src="'/images/Levels/' + level.Image" :alt="level.Image"/>
                        <img :src="'/images/Levels/' + roleImage" :alt="roleImage"/>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
    name: 'AvatarCard',
    props: ['Avatar', 'UserName', 'LastConnexion', 'Inscription', 'level', 'Role', 'nBFiction', 'totalWords', 'totalPoints', 'roleImage'],
    components: {TitleHeaderDashboard},
    data() {
        return {
            avatar: this.Avatar,
            lev: this.level,
            roleUser: this.Role,
        }
    },
    created(){
        // this.roleImage = this.Role.Image
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