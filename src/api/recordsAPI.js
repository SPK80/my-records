import axios from 'axios';
import config from './config.json'
const baseUrl = `${config.server.host}/api/records/`;

export default {
	get: (query = '') => axios.get(baseUrl + query),
	post: (record) => axios.post(baseUrl, record),
	put: (record) => axios.put(baseUrl, record),
	delete: (id = '') => axios.delete(baseUrl + '?id=' + id)
};