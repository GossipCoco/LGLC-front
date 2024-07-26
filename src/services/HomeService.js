import http from '../http/http-common'

class HomeService {
    getfaq() {
        return http.get('/Home/FAQ')
    }
}
export default new HomeService()