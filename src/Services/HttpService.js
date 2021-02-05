const serverPath = "https://jsonplaceholder.typicode.com/";

import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: serverPath,
});

export const get = (url) => {

	return axiosInstance.get(url);

};

export const post = (url, data) => {

	let config = {};

	return axiosInstance.post(url, data, config);

};