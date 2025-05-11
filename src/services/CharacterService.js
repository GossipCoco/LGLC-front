import http from '../http/http-common'

class CharacterService {
    getCharacterByName(id){
        return http.get(`/character/GetCharacterByName/${id}`)
    }
    GetOneOriginaleCharacterByName(id){
        return http.get(`/character/GetOneOriginaleCharacterByName/${id}`)
    }
    GetAllNamesAndIdsOriginaCharacters(id){
        return http.get(`/character/GetAllNamesAndIdsOriginaCharacters/${id}`)
    }
    GetOriginaleCharacterByUser(id, data) {
        return http.post(`/character/GetOriginaleCharacterByUser/${id}`, data)
    }
    CountNbOriginaleCharacterByUser(id){
        return http.get(`/character/CountNbOriginaleCharacterByUser/${id}`)
    }
    CountAllCharacters(){
        return http.get('/character/countAllcharacters')
    }
    CountCharacterByNameSearch(id){
        return http.get(`/character/CountCharacterByNameSearch/${id}`)
    }
    CountNbCharactersByClan(id){
        return http.get(`/character/CountNbCharactersByClan/${id}`)
    }
    GetAllCharactersByUser(id){
        return http.get(`/character/GetAllCharactersByUser/${id}`)
    }
    getAllCharacters(nav) {
        return http.post('/character/allcharacters', nav)
    }
    GetAllCharactersByClan(id, nav){
        return http.get(`/character/GetAllCharactersByClan/${id}`, nav)
    }
    GetAllCharactersDashboard(nav) {
        return http.post('/character/GetAllCharactersDashboard', nav)
    }
    getCharacterByNameSearch(name, nav) {
        return http.post(`/character/search/${name}`, nav)
    }
    GetAllNamesAndIdsCharacters() {
        return http.get('/character/GetAllNamesAndIdsCharacters')
    }
    createANewCharacter(data) {
        return http.post('/character/createANewCharacter', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}
        )
    }
    CreateAnOriginalCharacter(id, data){
        return http.post(`/character/CreateAnOriginalCharacter/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}
        )
    }
    GetTwoRandoCharacters() {
        return http.get('/character/GetTwoRandoCharacters')
    }
    EditOriginalCharacter(id, data){
        return http.post(`/character/EditOriginalCharacter/${id}`, data)
    }
}

export default new CharacterService()