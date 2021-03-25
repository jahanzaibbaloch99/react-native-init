import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import handleDeeplinks from './src/Helpers/Deeplinks';
import { initFCM, getToken } from "./src/Helpers/FCM";
import { disableInAppMessages, enableInAppMessages } from "./src/Helpers/InAppMessaging";
// import checkForAppUpdates from "./src/Helpers/AutoUpdate";

disableInAppMessages();
initFCM();
handleDeeplinks();

// checkForAppUpdates();
// getToken().then((token) => console.log(token));

enableInAppMessages();

AppRegistry.registerComponent(appName, () => App);
