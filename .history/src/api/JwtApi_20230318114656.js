const axios = require('axios')
const config = require('../../server')

const JwtAPI = {}

JwtAPI.logged = false;
JwtAPI.permission = null
JwtAPI.SetUser = (token) => {
    console.log(token)
   return token
}
JwtAPI.GetUser = () => {
    return localStorage.getItem('token')
}
JwtAPI.UnsetUser = () => {
    localStorage.removeItem('token')
}
JwtAPI.Connexion = (user) => {
    console.log("JwtAPI : ", user)
    return axios
    .post(config.Url + "/user/login", user)
        .then((token) => {
            console.log('token', token.data)
            if (token.status == 200) {
                JwtAPI.SetUser(token.data.token);
                axios.defaults.headers.common['Authorization'] = JwtAPI.GetUser()
                JwtAPI.logged = true
            }
            else {
                JwtAPI.logged = false
                JwtAPI.UnsetUser()
            }
        })
        .catch((err) => console.log(err))
}

JwtAPI.Disconnect = (router) => {
    JwtAPI.logged = false;
    JwtAPI.UnsetUser()
    router.push({ path: '/logout' });
}
JwtAPI.NotConnected = () => {
    JwtAPI.UnsetUser();
    this.$router.push({ path: '/login' })
}

JwtAPI.IsLogged = () => {
    JwtAPI.logged = JwtAPI.GetUser() ? true : false
    return JwtAPI.logged
};
JwtAPI.Permission = () => {
    JwtAPI.permission = true
    return JwtAPI.permission
}
module.exports = JwtAPI