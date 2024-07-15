import http from '../http/http-common'

class FictionService {
    getAllFictions() {
        return http.get('/fiction')
    }
    CountAllMyFictions(id){
        return http.post(`/fiction/countAllMyFictions/${id}`)
    }
    getFictionByName(id, data){
        return http.post(`/fiction/${id}`, data);
    }
    getChapter(id, data){
        return http.post(`/fiction/chapitre/${id}`, data);
    }
    GetFiveLastChapByUser(id){
        console.log(id)
        return http.get(`/fiction/GetFiveLastChapByUser/${id}`);
    }
    GetLastChapterOfAFiction(id, data){
        console.log(id, data)
        return http.post(`/fiction/GetLastChapterOfAFiction/${id}`, data);
    }
    CreateANewChapter(id, data) {
        return http.post(`/fiction/createAChapitre/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    CountTotalWordBuUser(id, data){
        return http.post(`/fiction/CountTotalWordBuUser/${id}`, data);
    }
    CountTotalWordBuUserV2(id){
        return http.get(`/fiction/CountTotalWordBuUserV2/${id}`);
    }

}

export default new FictionService()