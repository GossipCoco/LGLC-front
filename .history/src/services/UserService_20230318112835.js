import http from '../http/http-common'
import axios from 'axios';



class UserService {
    getAllUsers(data) {
        return http.post('/user', data)
    }
    getUserById(id){
        return http.get(`/user/${id}`)
    }
    loginUser(data){
        return http.post('/user/login', data)
    }
    // getPublicContent() {
    //     return axios.get(API_URL + 'all');
    //   }
    //   getUserBoard() {
    //     return axios.get(API_URL + 'user', { headers: authHeader() });
    //   }
    //   getModeratorBoard() {
    //     return axios.get(API_URL + 'mod', { headers: authHeader() });
    //   }
    //   getAdminBoard() {
    //     return axios.get(API_URL + 'admin', { headers: authHeader() });
    //   }
}
export default new UserService()