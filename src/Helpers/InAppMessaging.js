import inAppMessaging from '@react-native-firebase/in-app-messaging';

export function disableInAppMessages() {
	console.log('disableInAppMessages');
	inAppMessaging().setMessagesDisplaySuppressed(true);
}

export function enableInAppMessages() {
	console.log('enableInAppMessages');
	inAppMessaging().setMessagesDisplaySuppressed(false);
}