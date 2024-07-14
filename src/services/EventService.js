import http from '../http/http-common'

class EventService{
    GetAllEvents(){
        return http.get(`/event`)
    }
    saveGameResults(id, data){
        return http.post(`/event/GetPointParId/${id}`, data)
    }
}

export default new EventService