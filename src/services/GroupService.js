import http from '../http/http-common'

class GroupService {
    GetAllGroups(data){
         return http.post('/Group/', data)
    }
    GetGroupById(id){
        return http.post(`/Group/GetAGroupById/${id}`)
    }
    GetGroupByPostId(id){
        return http.get(`/Group/GetGroupByPostId/${id}`)
    }
    GetGroupByCommentById(id){ 
        return http.get(`/Group/GetGroupByCommentById/${id}`)
    }
    CountAllGroups(){
        return http.get('/Group/CountAllGroups')
    }
}

export default new GroupService