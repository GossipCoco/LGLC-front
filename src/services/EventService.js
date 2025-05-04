import http from '../http/http-common'

class EventService{
    GetAllEvents(nav){
        return http.post(`/event`, nav)
    }
    saveGameResults(id, data){
        return http.post(`/event/GetPointParId/${id}`, data)
    }
}

export default new EventService