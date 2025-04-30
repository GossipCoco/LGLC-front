import http from '../http/http-common'
class ArcBook{
    GetBookByTitle(id){
        console.log(id)
        return http.get(`/ArcBook/GetBookByTitle/${id}`)
    }
    GetAllArcsWithBooks(nav) {
        console.log(nav)
        return http.post('/ArcBook/GetAllArcsWithBooks', nav)
    }
    getAllBooks(nav) {
        console.log(nav)
        return http.post('/ArcBook/GetAllBooks', nav)
    }
    GetLastPublishedBook(){
        return http.get('/ArcBook/GetLastPublishedBook')
    }
    GetCurrentArc() {
        return http.get('/ArcBook/GetCurrentArc')
    }
}
export default new ArcBook()