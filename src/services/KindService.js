import http from '../http/http-common'

class KindService {
    GetAllKinds(){
        return http.get('/Kind')
    }
}
export default  new KindService()