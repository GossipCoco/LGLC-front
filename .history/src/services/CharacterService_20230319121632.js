import http from '../http/http-common'

class CharacterService {
    getAllCharacters(data) {
        console.log(data)
        return http.post('/character', data)
    }
    getCharacterByName(id){
        return http.get(`/character/${id}`)
    }
    getCharacterByNameSearch(name) {
        return http.get(`/character/search/${name}`)
    }
    createANewCharacter(data) {
        return http.post('/character/createANewCharacter', data)
    }
    CountAllCharacters(){
        console.log("test")
        return http.get('/character/countAllcharacters')
    }
}

export default new CharacterService()