import http from '../http/http-common'
class QuestService{
    GetAllQuests(){
        return http.get(`/quest`)
    }
}
export default new QuestService