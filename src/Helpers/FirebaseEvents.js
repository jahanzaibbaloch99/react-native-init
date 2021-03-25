// Using https://rnfirebase.io/analytics/usage

import analytics from '@react-native-firebase/analytics';

export function logEvent(eventName, eventData) {
	return analytics().logEvent(eventName, eventData);
}