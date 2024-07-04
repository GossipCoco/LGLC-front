<template>
    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12  card-global">
        <div class="card profil-card fiction-card">
            <div class="card-header avatar-container-header">
                <h4>Event à venir</h4>
                <!-- <div class="avatar-container"><img :src="'/images/Levels/' + level" class="img-fluid card-img-top" alt="avatar"></div> -->
            </div>
            <div class="card-body">
                <div v-for="(event, index) in events" :key="index">
                    <p>{{ event.Title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import QuestService from "../../../services/EventService"
export default {
    name: 'Event',
    data() {
        return {
            events: {}
        }
    },
    created() {
        this.GetAllQuests()
    },
    methods: {
        GetAllQuests() {
            QuestService.GetAllEvents()
                .then((response) => {
                    this.events = response.data.ob
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>