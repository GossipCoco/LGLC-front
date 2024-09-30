import http from '../http/http-common'

class GradeServices {
    getAllGrades() {
        return http.get('/grade')
    }

}

export default new GradeServices()