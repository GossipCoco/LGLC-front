import http from '../http/http-common'

class FictionService {
    CountAllFictionsOnBases(){
        return http.get('/fiction/CountAllFictionsOnBases')
    }
    countAllMyFictions(id){
        return http.get(`/fiction/CountAllMyFictions/${id}`);
    }
    getFictionByName(id, data){
        console.log(id, data)
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
        console.log(nav)
        return http.post('/fiction/GetAllFictionsOfALlUsers', nav)
    }
    GetFiveLastChapByUser(id){
        return http.get(`/chapter/GetFiveLastChapByUser/${id}`);
    }
    getChapter(id, data){
        return http.post(`/chapter/Chapitre/${id}`, data);
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

}

export default new FictionService()