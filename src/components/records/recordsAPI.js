import axios from 'axios';
const baseUrl = 'http://localhost:8000/api/records/';

export default {
	get: (query = '') => axios.get(baseUrl + query),
	post: (record) => axios.post(baseUrl, record)
};