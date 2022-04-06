import axios from 'axios';
import config from './config.json'
const baseUrl = `${config.server.host}/api/users/`;

export default {
	login: (userName, userPassword) => axios.put(baseUrl, {userName, userPassword}),
};