import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44368/api/';

class UserService {
  getManagers() {
    return axios.get(API_URL + 'Managers', { headers: authHeader() });
  }

  getModels() {
    return axios.get(API_URL + 'Models', { headers: authHeader() });
  }

}

export default new UserService();