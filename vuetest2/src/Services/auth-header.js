export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('token'));
  
    if (localStorage.getItem('token')) {
      return { Authorization: 'Bearer ' + localStorage.getItem('token') };
    } else {
      return {};
    }
  }