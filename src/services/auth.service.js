import conf from '../../server'
import api from "./api";
import TokenService from "./token.service";
const API_URL = conf.Url
class AuthService {
    login(user) {
        return api
            .post(API_URL + '/user/login', {
                Email: user.Email,
                Password: user.Password
            })
            .then(response => {
                if (response.data.isSuccess) {
                    user.user = response.data
                    localStorage.setItem('user', JSON.stringify(user.user))
                    if (response.data.tocken) {
                        TokenService.setUser(response.data);
                      }
                      return user.user;
                }
                else {
                    this.logout
                }
                //console.log(response.data.ob)
                return response.data.ob
            })
    }

    logout() {
        console.log('logout')
        // localStorage.removeItem('user')
        // user.user = {}
        // user.isSuccess = false
    }
}

export default new AuthService()