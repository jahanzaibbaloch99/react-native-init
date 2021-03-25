// Using https://rnfirebase.io/messaging/usage

import store from "../Stores";
import { setFCMToken } from "../Stores/Actions";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';

export function initFCM() {

	messaging().onMessage((message) => {

		var notification = message.notification;

		showLocalNotification({
			channelId: "500",
			title: notification.title,
			message: notification.body,
			priority: 'high',
		});

	});

}

export function getToken() {
	return messaging().getToken();
}

export function showLocalNotification(notification) {
	PushNotification.localNotification(notification);
}

