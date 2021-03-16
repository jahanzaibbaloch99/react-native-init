import store from "../Stores";
import { setFCMToken } from "../Stores/Actions";

import messaging from '@react-native-firebase/messaging';

export default function init() {
	messaging().getToken().then((token) => {
		store.dispatch(setFCMToken(token));
	});
}

export function onMessage(onMessageListener) {
	messaging().onMessage(onMessageListener);
}

export function bgListener(listener) {
	messaging().setBackgroundMessageHandler(listener);
}