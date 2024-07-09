import http from '../http/http-common'

class CharacterService {
    getCharacterByName(id){
        console.log("getCharacterByName : ", id)
        return http.get(`/character/GetCharacterByName/${id}`)
    }
    CountAllCharacters(){
        return http.get('/character/countAllcharacters')
    }    
    GetAllCharactersByUser(id){
        return http.get(`/character/GetAllCharactersByUser/${id}`)
    }
    getAllCharacters(nav) {
        return http.post('/character/allcharacters', nav)
    }
    GetAllCharactersDashboard(nav) {
        return http.post('/character/GetAllCharactersDashboard', nav)
    }
    getCharacterByNameSearch(name) {
        return http.get(`/character/search/${name}`)
    }
    GetAllNamesAndIdsCharacters() {
        return http.get('/character/GetAllNamesAndIdsCharacters')
    }
    createANewCharacter(data) {
        console.log(data)
        return http.post('/character/createANewCharacter', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}
        )
    }
    GetTwoRandoCharacters() {
        return http.get('/character/GetTwoRandoCharacters')
    }
}

export default new CharacterService()