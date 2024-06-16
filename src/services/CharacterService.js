import http from '../http/http-common'

class CharacterService {
    getAllCharacters(nav) {
        // console.log(nav)
        return http.post('/character/allcharacters', nav)
    }
    GetAllCharactersDashboard(nav) {
        // console.log(nav)
        return http.post('/character/GetAllCharactersDashboard', nav)
    }
    CountAllCharacters(){
        console.log("test")
        return http.get('/character/countAllcharacters')
    }
    getCharacterByName(id){
        return http.get(`/character/${id}`)
    }
    GetAllCharactersByUser(id){
        return http.get(`/character/GetAllCharactersByUser/${id}`)
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