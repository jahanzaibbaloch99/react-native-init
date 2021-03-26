import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import handleDeeplinks from './src/Helpers/Deeplinks';
import { initFCM, getToken } from "./src/Helpers/FCM";
import { disableInAppMessages, enableInAppMessages } from "./src/Helpers/InAppMessaging";
import { logEvent } from "./src/Helpers/FirebaseEvents";
import { init } from "./src/Helpers/RemoteConfig";

disableInAppMessages();
initFCM();
handleDeeplinks();
enableInAppMessages();

getToken().then(token => console.log('token', token));

logEvent('appInit', {
	awesome: true,
}).then(() => console.log('App Logged!'));

init();

AppRegistry.registerComponent(appName, () => App);
