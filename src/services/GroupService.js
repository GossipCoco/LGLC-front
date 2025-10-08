import http from '../http/http-common'

class GroupService {
    GetAllGroups(data){
         return http.post('/Group/', data)
    }
    GetGroupById(id){
        return http.post(`/Group/GetAGroupById/${id}`)
    }
}

export default new GroupService