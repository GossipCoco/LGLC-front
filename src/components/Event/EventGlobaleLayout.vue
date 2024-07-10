<template>
    <div class="dashboard-max-card-container card fiction-container">
        <div class="card-header">
            <h4>évènement</h4>
        </div>
        <div class="card-body">
            <div v-for="(event, index) in events" :key="index">
                <p>{{ event.Title }} : {{ event.Description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import QuestService from "../../services/QuestService"
export default {
    name: 'EventGlobalLayout',
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