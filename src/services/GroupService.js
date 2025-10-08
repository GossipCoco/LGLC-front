import http from '../http/http-common'

class GroupService {
    GetAllGroups(data){
         return http.post('/Group/', data)
    }
    GetGroupById(id){
        return http.post(`/Group/GetAGroupById/${id}`)
    }
    CreateGroup(data){
        return http.post('/Group/CreateGroup', data)
    }
}

export default new GroupService