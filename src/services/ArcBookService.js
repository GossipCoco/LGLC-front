import http from '../http/http-common'

class ArcBook{
    GetAllArcsWithBooks(nav) {
        console.log(nav)
        return http.post('/ArcBook/GetAllArcsWithBooks', nav)
    }
    getAllBooks(nav) {
        console.log(nav)
        return http.post('/ArcBook/GetAllBooks', nav)
    }
}
export default new ArcBook()