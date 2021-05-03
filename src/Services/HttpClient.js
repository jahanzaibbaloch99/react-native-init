const serverPath = "";

import axios from 'axios';
import { Alert } from 'react-native';

const axiosInstance = axios.create({
	baseURL: serverPath,
});

const HandleResponseError = (error) => {
	if (error.message === 'Network Error') {
		Alert.alert('Network Error', 'Please check your internet connection');
	} else if (error.message === 'Request failed with status code 401') {
		Alert.alert(
			'Session Expired',
			'Please login again to continue.',
			[
				{
					text: 'Ok',
					onPress: async () => { },
				},
			],
			{ cancelable: false },
		);
	} else if (error.message.startsWith('timeout')) {
		Alert.alert(
			'Request Timed Out',
			'Your request has timed out. Please try again.',
		);
	} else {
		Alert.alert('Error', 'An error occured, please try again later.');
	}
};

const getToken = () => {
	return "";
};

export default class APIService {

	static HttpCatch(error) {
		console.log('error', JSON.stringify(error));
		HandleResponseError(error);
	}

	static get = (route) => {

		console.log('HTTP GET Route: ', route);

		const config = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${getToken()}`,
			},
		};

		return new Promise((resolve, reject) => {

			axiosInstance.get(route, config)
				.then((response) => resolve(response?.data?.value))
				.catch((error) => {
					this.HttpCatch(error);
					reject(error);
				});

		});

	};

	static post = (url, data) => {

		let config = {};

		return axiosInstance.post(url, data, config);

	};

}