// Using https://rnfirebase.io/remote-config/usage

import remoteConfig from '@react-native-firebase/remote-config';

const defaults = {
	awesome_new_feature: 'disabled',
	some_key: 'ZZZ',
};

export function init() {

	console.log('init Remote Config');

	remoteConfig().activate();

	return remoteConfig()
		.setDefaults(defaults)
		.then(() => remoteConfig().fetch())
		.then(() => {
			var allValues = remoteConfig().getAll();
			console.log('allValues', allValues);
		});

}