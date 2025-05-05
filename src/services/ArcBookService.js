import http from '../http/http-common'
class ArcBook{
    GetBookByTitle(id){
        return http.get(`/ArcBook/GetBookByTitle/${id}`)
    }
    GetAllArcsWithBooks(nav) {
        return http.post('/ArcBook/GetAllArcsWithBooks', nav)
    }
    getAllBooks(nav) {
        return http.post('/ArcBook/GetAllBooks', nav)
    }
    GetLastPublishedBook(){
        return http.get('/ArcBook/GetLastPublishedBook')
    }
    GetCurrentArc() {
        return http.get('/ArcBook/GetCurrentArc')
    }
    GetArcByName(id){
        return http.get(`/ArcBook/GetArcByName/${id}`)
    }

}
export default new ArcBook()