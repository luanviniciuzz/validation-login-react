import axios from 'axios';

let cliente_http = axios.create({
  baseURL: "https://api.homologation.cliqdrive.com.br",
  timeout: 3000,
  responseType: 'json',
  responseEncoding: 'utf8',
});

cliente_http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && window.location.pathname === '/profile') {
      localStorage.removeItem('loggedUserToken');
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    }
  },
);

export default cliente_http;