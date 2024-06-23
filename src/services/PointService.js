import http from '../http/http-common'
class PointService{
    SendPoint(id, data){
        return http.post(`/event/${id}`, data)
    }
}
export default new PointService