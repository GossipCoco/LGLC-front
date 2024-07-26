import http from '../http/http-common'
class QuestService{
    GetTotalQuest(){
        return http.get('/quest/GetTotalQuest')
    }
    GetQuestById(id){
        return http.get(`/quest/${id}`)
    }
    GetAllQuests(nav){        
        return http.post(`/quest`, nav)
    }
    GetTotalQueries(){
        return http.get('/quest/GetTotalQueries')
    }

}
export default new QuestService