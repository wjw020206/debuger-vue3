import Axios from './Axios';

const http = new Axios({
  baseURL: '/api'
});

export { http };
