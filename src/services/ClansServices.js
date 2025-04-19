import http from '../http/http-common'

class ClanService {
    countAllClans(){
        return http.get('/clan/countAllClans')
    }
    getAllClans(data) {
        return http.post('/clan', data)
    }
    getClanByName(id){
        return http.get(`/clan/${id}`);
    }
    getLocationById(id){
        return http.get(`/clan/Location/${id}`);
    }
    GetAllLocations(nav) {
        return http.post('/clan/Location/GetAllLocations', nav)
    }
    GetLocationById(id){
        console.log(id)
        return http.get(`/clan/Location/${id}`);
    }
}

export default new ClanService()