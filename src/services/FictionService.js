import http from '../http/http-common'

class FictionService {
    CountAllMyFictions(id){
        return http.get(`/fiction/countAllMyFictions/${id}`);
    }
    CountAllFictionsOnBases(){
        return http.get('/fiction/CountAllFictionsOnBases')
    }
    GetAllAUthors(){
        return http.get('/fiction/GetAllAUthors')
    }
    GetAllFictionsByUser(id, data){
        return http.post(`/fiction/GetAllFictionsByUserId/${id}`, data);
    }
    GetFictionByName(id, data){
        return http.post(`/fiction/GetAllFictionsByName/${id}`, data);
    }
    CountTotalWordBuUser(id, data){
        return http.post(`/fiction/CountTotalWordBuUser/${id}`, data);
    }
    CountTotalWordBuUserV2(id){
        return http.get(`/fiction/CountTotalWordBuUserV2/${id}`);
    }
    GetAllCommentsByFiction(id, data){
        return http.post(`/fiction/GetAllCommentsByFiction/${id}`, data);
    }
    GetAllFictionsOnBase(nav){
        return http.post('/fiction/GetAllFictionsOfALlUsers', nav)
    }    
    UpdateFictionIllustration(id, data) {
        return http.post(`/fiction/UpdateFictionIllustration/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    UploadFictionBackgroundIllustration(id, data){
        return http.post(`/fiction/UploadFictionBackgroundIllustration/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });   
    }
    CreateCommentForAFiction(id, data){
        return http.post(`/fiction/CreateCommentForAFiction/${id}`, data)
    }
    GetFiveLastChapByUser(id){
        return http.get(`/chapter/GetFiveLastChapByUser/${id}`);
    }
    getChapter(id){
        return http.get(`/chapter/GetAChapterByName/${id}`);
    }
    GetAChapterById(id){
        return http.get(`/chapter/GetAChapterById/${id}`);
    }
    CreateANewChapter(id, data) {
        return http.post(`/chapter/CreateAChapitre/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    GetLastChapterOfAFiction(id, data){
        return http.post(`/chapter/GetLastChapterOfAFiction/${id}`, data);
    }
    GetAllChaptersByFiction(id){
        return http.get(`/chapter/GetAllChaptersByFiction/${id}`);
    }
    EditChapter(id, data){
        return http.post(`/Chapter/EditChapter/${id}`, data)
    }
}
export default new FictionService()