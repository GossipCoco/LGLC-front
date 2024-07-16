<template>
    <div class="character-container-global clans-location-container" style="overflow-y: auto;">
        <div class="card-group clan-group">
            <div v-for="(location, index) in allLocations" :key="index">
                <div class="card" style="width: 30rem">
                    <div class="card-image clan-card" v-bind:style="{
                backgroundImage: 'url(/images/Locations/' + location.Image + ')',
            }"></div>
                    <div class="card-header"></div>
                    <div class="card-body">
                        <div class="clan-description">
                            <!-- {{ location }} -->
                            <p v-html="location.Description">

                            </p>
                        </div>
                        <!-- <div class="clan-link">
              <router-link type="button" class="btn btn-primary" :to="'/clan/'+clan.Id">Plus de détails</router-link>
            </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ClanServices from '../../services/ClansServices'
export default {
    name: 'AllLocationsLayout',
    data() {
        return {
            allLocations: {}
        }
    },
    created() {
        this.GetAllLocations()
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            }
            return text.substring(0, maxLength) + '...';
        },
        GetAllLocations() {
            ClanServices.GetAllLocations()
                .then((response) => {
                    this.allLocations = response.data.ob
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

}



</script>