import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import handleDeeplinks from './src/Helpers/Deeplinks';
import { initFCM, getToken } from "./src/Helpers/FCM";
import PushNotificationiOS from "react-native-push-notification";
// import checkForAppUpdates from "./src/Helpers/AutoUpdate";

// PushNotificationiOS.requestPermissions().then((a) => console.log('a', a));

initFCM();
handleDeeplinks();
checkForAppUpdates();

getToken().then((token) => console.log(token));

AppRegistry.registerComponent(appName, () => App);
