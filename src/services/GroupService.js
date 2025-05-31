import http from '../http/http-common'

class GroupService {
    GetAllGroups(){
         return http.get('/Group/')
    }
}

export default new GroupService