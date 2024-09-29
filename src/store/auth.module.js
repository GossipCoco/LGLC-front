import AuthService from '../services/auth.service'
import UserAPI from '../api/UserAPI'
import TokenService from '../services/token.service'
const state = {
  user: null,
  isAuthenticated: false,
};
const actions = {
  logout({ commit }) {
    // Supprime les informations utilisateur du store
    commit('logout');
    
    // Nettoie les cookies via TokenService
    TokenService.removeUser();
  },
};
const mutations = {
  logout(state) {
    state.user = null;
    state.isAuthenticated = false;
  },
};
const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }
//console.log(initialState)
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login ({ commit }, userId) {
      return AuthService.login(userId).then(        
        user => {
          if (user.isSuccess) {
            console.log('loginSuccess', user)
            UserAPI.Permission(user)            
            commit('loginSuccess', user)
            return Promise.resolve(user)
          } else {
            console.log('loginFailure', user)
            commit('loginFailure')
            return Promise.reject(user)
          }
        },
        error => {
          console.log("loginFailure", error)
          console.log('loginFailure')
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    refreshToken({ commit }, accessToken) {
      commit('refreshToken', accessToken);
    },
    logout ({ commit }) {
      AuthService.logout()
      // Supprime les informations utilisateur du store
      commit('logout');
    
      // Nettoie les cookies via TokenService
      TokenService.removeUser();
    },
    allUsers ({ commit }) {
      return AuthService.allUsers().then(
        users => {
          // console.log(users)
          return Promise.resolve(users)
        },
        error => {
          // console.log('loginFailure')
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    loginSuccess (state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure (state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout (state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    refreshToken(state, accessToken) {
      state.status.loggedIn = true;
      state.user = { ...state.user, accessToken: accessToken };
    }
  }
}
export default {
  state,
  actions,
  mutations,
};