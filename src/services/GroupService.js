import http from '../http/http-common'

class GroupService {
    GetAllGroups(){
         return http.get('/Group/')
    }
    GetGroupById(id){
        return http.post(`/Group/GetAGroupById/${id}`)
    }
}

export default new GroupService