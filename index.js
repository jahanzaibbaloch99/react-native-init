import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import handleDeeplinks from './src/Helpers/Deeplinks';
import { initFCM, getToken } from "./src/Helpers/FCM";
import { disableInAppMessages, enableInAppMessages } from "./src/Helpers/InAppMessaging";
import { logEvent } from "./src/Helpers/FirebaseEvents";

disableInAppMessages();
initFCM();
handleDeeplinks();
enableInAppMessages();

logEvent('appInit', {
	awesome: true,
}).then(() => console.log('App Logged!'));

AppRegistry.registerComponent(appName, () => App);
