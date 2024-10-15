import http from '../http/http-common'
class UserService {
    getAllUsers() {
        return http.get('/user', )
    }
    getUserById(id){
        return http.get(`/user/${id}`)
    }
    GetUserByUsername(id){
        return http.get(`/user/UserName/${id}`)
    }
    GetMessageByReceiverId(id, data){
        console.log(id, data)
        return http.post(`/message/GetMessageByReceiverId/${id}`, data)
    }
    ChangeStatusMessage(id, status){
        console.log(id, status)
        return http.post(`/message/ChangeStatusMessage/${id}`, { status })
    }
    loginUser(data){
        return http.post('/user/login', data)
    }
}
export default new UserService()