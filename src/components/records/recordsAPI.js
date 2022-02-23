import axios from 'axios';
import config from '../../config.json'
const baseUrl = `http://${config.server.host}:${config.server.port}/api/records/`;

export default {
	get: (query = '') => axios.get(baseUrl + query),
	post: (record) => axios.post(baseUrl, record),
	delete: (id = '') => axios.delete(baseUrl + '?id=' + id)
};