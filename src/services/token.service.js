import Cookies from 'js-cookie';

class TokenService {
  // Récupère le refresh token depuis le cookie
  getLocalRefreshToken() {
    return Cookies.get('refreshToken');
  }

  // Récupère l'access token depuis le cookie
  getLocalAccessToken() {
    return Cookies.get('accessToken');
  }

  // Met à jour l'access token dans le cookie
  updateLocalAccessToken(token) {
    Cookies.set('accessToken', token, { expires: 7, secure: true, sameSite: 'Strict' });
  }

  // Récupère l'utilisateur (stocké dans un cookie)
  getUser() {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
  }

  // Stocke l'utilisateur dans un cookie
  setUser(user) {
    Cookies.set('user', JSON.stringify(user), { expires: 7, secure: true, sameSite: 'Strict' });
  }

  // Supprime les cookies utilisateur et tokens lors du logout
  removeUser() {
    Cookies.remove('user');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }
}

export default new TokenService();
