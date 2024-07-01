import http from '../http/http-common'
class QuestService{
    GetQuestById(id){
        console.log(id)
        return http.get(`/quest/${id}`)
    }
    GetTotalQueries(){
        return http.get('/quest/GetTotalQueries')
    }
    GetAllQuests(nav){
        
        return http.post(`/quest`, nav)
    }

}
export default new QuestService