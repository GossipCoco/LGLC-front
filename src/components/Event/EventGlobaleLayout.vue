<template>
    <div class="dashboard-max-card-container card fiction-container">
        <CardHeader v-bind:Title="'évènement'" />
        <div class="card-body">
            <div class="row event-container">
                <div class="col-6 col-sm-12 col-md-6">
                <ListEvents v-bind:events="events" />
            </div>            
            <div class="col-6 col-sm-12 col-md-6">
                <Scheduler />
            </div>
            </div>            
        </div>
    </div>
</template>
<script>
import QuestService from "../../services/QuestService"
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import ListEvents from './Components/ListEvents.vue'
import Scheduler from './Components/Scheduler.vue'
export default {
    name: 'EventGlobalLayout',
    components: {
        CardHeader,
        ListEvents,
        Scheduler
    },
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
            QuestService.GetAllQuests()
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