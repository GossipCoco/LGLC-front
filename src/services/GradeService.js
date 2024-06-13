import http from '../http/http-common'

class GradeService {
    getAllGrade() {
        return http.get('/grade')
    }

}

export default new GradeService()