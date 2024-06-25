<template>
     <div class="dashboard-max-card-container card fiction-container">
        <div class="card-header">
            <h2>Liste des quêtes à réaliser</h2>
        </div>
        <div class="row list-fiction-card-container">
            <p>
                {{ allQuests }}
            </p>
        </div>
    </div>
</template>
<script>

import QuestService from '../../../services/QuestService'
export default{
    name: 'Quest',
    data(){
        return{
            allQuests: {},
            Title: null,
            Quest: null,
            NbPoints: null
        }
    },
    created(){
        this.GetAllQuests()
    },
    methods:{
        GetAllQuests(){
            QuestService.GetAllQuests()
            .then((response) => {
                this.allQuests = response.data.ob
            })
        }
    }
}
</script>