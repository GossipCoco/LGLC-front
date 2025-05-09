import http from '../http/http-common'

class AllMyFictionService {
    CountAllFictionsOnBases(){
        return http.get('/fiction/CountAllFictionsOnBases')
    }
    GetAllFictionsByUser(id, data){
        return http.post(`/fiction/GetAllFictionsByUserId/${id}`, data);
    }
    CountAllMyFictions(id){
        return http.get(`/fiction/countAllMyFictions/${id}`);
    }
    GetFictionByName(id, data){
        return http.post(`/fiction/getFictionByName/${id}`, data);
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
    GetFiveLastChapByUser(id){
        return http.get(`/fiction/GetFiveLastChapByUser/${id}`);
    }
    getChapter(id, data){
        return http.post(`/fiction/chapitre/${id}`, data);
    }
    
    GetChapter(id, data){
        return http.post(`/fiction/chapitre/${id}`, data);
    }
    CreateANewChapter(id, data) {
        return http.post(`/fiction/createAChapitre/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    GetLastChapterOfAFiction(id, data){
        return http.post(`/fiction/GetLastChapterOfAFiction/${id}`, data);
    }
}

export default new AllMyFictionService()