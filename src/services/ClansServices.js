import http from '../http/http-common'

class ClanService {
    getAllClans() {
        return http.get('/clan')
    }
    getClanByName(id){
        return http.get(`/clan/${id}`);
    }
    getLocationById(id){
        return http.get(`/clan/Location/${id}`);
    }
    GetAllLocations() {
        return http.get('/clan/Location/GetAllLocations')
    }
    GetLocationById(id){
        console.log(id)
        return http.get(`/clan/Location/${id}`);
    }
}

export default new ClanService()