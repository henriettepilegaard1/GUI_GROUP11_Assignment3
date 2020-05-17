import axios from 'axios';

const API_URL = 'https://localhost:44368/api/Account/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response.data.jwt)
        if (response.data.jwt) {
          localStorage.setItem('token', response.data.jwt);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export default new AuthService();