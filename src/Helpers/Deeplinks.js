// Read https://reactnavigation.org/docs/deep-linking/
import { Linking } from "react-native";

export default function handleDeeplinks() {

	console.log('Initiating deeplink');

	Linking.getInitialURL().then((url) => {

		console.log('getInitialURL', url);

	});

	Linking.addEventListener('url', (url) => {

		console.log('addEventListener Url', url);

	});

}