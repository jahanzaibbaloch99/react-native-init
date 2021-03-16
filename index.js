import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import FCMHelper, { onMessage, bgListener } from "./src/Helpers/FCM";

// FCMHelper();
// onMessage((message) => {
// 	console.log('test', message);
// });

// bgListener((test) => {
// 	console.log('bg message', test);
// 	return {};
// });

import messaging from "@react-native-firebase/messaging";


messaging().onMessage((message) => {
	console.log('message', message);
});

// messaging().setBackgroundMessageHandler((message) => {
// 	return new Promise((resolve, reject) => {
// 		console.log('setBackgroundMessageHandler', message);
// 		resolve();
// 	});
// });



AppRegistry.registerComponent(appName, () => App);
