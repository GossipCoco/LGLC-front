import http from '../http/http-common'
class ImageService{
    GetAllImages(){
        return http.get('/image/Image')
    }
    GetAllIllustrations() {
        return http.get('/image/Illustration')
    }
}
export default new ImageService