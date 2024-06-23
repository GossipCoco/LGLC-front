import http from '../http/http-common'

class ClanService {
    getAllClans() {
        return http.get('/clan')
    }
    getClanByName(id){
        return http.get(`/clan/${id}`);
    }
    GetAllLocations() {
        return http.get('/clan/Location/GetAllLocations')
    }
}

export default new ClanService()