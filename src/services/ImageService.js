import http from '../http/http-common'
class ImageService{
    GetAllImages(){
        return http.get('/image/Image')
    }
    GetAllIllustrations() {
        return http.get('/image/GetAllIllustrations')
    }
}
export default new ImageService