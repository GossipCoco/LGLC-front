import http from '../http/http-common'
class QuestService{
    GetTotalQueries(){
        return http.get('/quest/GetTotalQueries')
    }
    GetAllQuests(nav){
        
        return http.post(`/quest`, nav)
    }
}
export default new QuestService