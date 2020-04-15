import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, Axios);
Axios.defaults.baseURL = 'https://api.jsonbin.io/b';
Axios.defaults.headers['secret-key'] = '$2a$10$7xBa5xY1mP1wu3G7lRdgyuOl.Rt76BCTERHUUkHm6OBU.vvRPx8vu';

export default Axios;