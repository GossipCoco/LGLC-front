import http from '../http/http-common'
class QuestService{
    GetTotalQuest(){
        console.log("GetTotalQuest")
        return http.get('/quest/GetTotalQuest')
    }
    GetQuestById(id){
        console.log(id)
        return http.get(`/quest/${id}`)
    }
    GetAllQuests(nav){        
        return http.post(`/quest`, nav)
    }

}
export default new QuestService