import axios from 'axios';  // Utilisez `import` pour importer axios
import config from '../../server';  // Vérifiez que ce chemin est correct et que server contient la config nécessaire
// import http from '../http/http-common'
const JwtAPI = {};

JwtAPI.logged = false;
JwtAPI.permission = null;

JwtAPI.SetUser = (token) => {
  console.log('token', token)
  localStorage.setItem('token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

JwtAPI.GetUser = () => {
  return localStorage.getItem('token');
};

JwtAPI.UnsetUser = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
};

JwtAPI.Connexion = (user) => {

  // try {
    const response = axios.post(`${config.Url}/user/login`, user);
    
    if (response.status === 200) {
      JwtAPI.SetUser(response.data.token);
      JwtAPI.logged = true;
      return true;
    } else {
      JwtAPI.logged = false;
      JwtAPI.UnsetUser();
      return false;
    }
};

JwtAPI.Disconnect = (router) => {
  JwtAPI.logged = false;
  JwtAPI.UnsetUser();
  router.push({ path: '/logout' });
};

JwtAPI.IsLogged = () => {
  console.log('IsLogged')
  JwtAPI.logged = !!JwtAPI.GetUser();
  return JwtAPI.logged;
};

JwtAPI.Permission = () => {  
  console.log('Permission')
  JwtAPI.permission = true;
  return JwtAPI.permission;
};

export default JwtAPI;  // Utilisez `export default` pour exporter JwtAPI
