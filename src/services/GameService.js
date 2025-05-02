import http from '../http/http-common'

class GameService {
    getAllGames(data) {
        return http.post('/game', data)
    }
    GetAllLastFiveGames(data) {
        return http.post('/game/GetAllLastFiveGames', data)
    }
    CountAllMyFictions(id){
        return http.get(`/game/countAllMyGames/${id}`)
    }
    countAllGames(){
        return http.get('/game/countAllGames')
    }
    getAllGamesByUser(id, data) {
        return http.put(`/game/${id}`, data)
    }
    GetFiveLastGameByUser(id){
        return http.get(`/game/GetFiveLastGameByUser/${id}`)
    }
    GetAllGamesByCharacter(id, nav){        
        return http.post(`/game/GetAllGamesByCharacter/${id}`, nav)
    }
    CreateANewGame(id, data) {
        return http.post(`/game/createANewGame/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    AddANewCharacterToGameAndFiction(id, data){        
        console.log(id, data)
        return http.post(`/game/AddANewCharacterToGameAndFiction/${id}`, data)
    }
    AddANewOriginalCharacter(id, data){
        console.log(id, data)
        return http.post(`/game/AddANewOriginalCharacter/${id}`, data)
    }
}

export default new GameService()