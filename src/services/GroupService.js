import http from '../http/http-common'

class GroupService {
    GetAllGroups(){
         return http.get('/Group/')
    }
    GetGroupById(id){
        return http.get(`/Group/${id}`)
    }
}

export default new GroupService