// Using https://rnfirebase.io/remote-config/usage

import remoteConfig from '@react-native-firebase/remote-config';

export function initRemoteConfig(defaultValues = {}) {

	console.log('init Remote Config', defaultValues);

	// Activate previously fetched values
	remoteConfig().activate();

	// Fetch new values and store
	remoteConfig()
		.setDefaults(defaultValues)
		.then(() => remoteConfig().fetch(defaultValues.remoteConfigExpirationDuration));

}

export function get(key, type = 'string') {

	switch (type) {
		case 'number':
			return remoteConfig().getNumber(key);
			break;
		case 'string':
			return remoteConfig().getString(key);
			break;
		default:
			return remoteConfig().getValue();
			break;
	}

}