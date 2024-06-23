import http from '../http/http-common'

class EventService{
    GetAllEvents(){
        console.log("**** GetAllEvents ****");
        return http.get(`/event`)
    }
    saveGameResults(id, data){
        console.log(id, data)
        return http.post(`/event/GetPointParId/${id}`, data)
    }
}

export default new EventService