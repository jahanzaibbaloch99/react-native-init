import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import handleDeeplinks from './src/Helpers/Deeplinks';
import { initFCM, getToken } from "./src/Helpers/FCM";
import { disableInAppMessages, enableInAppMessages } from "./src/Helpers/InAppMessaging";
import { logEvent } from "./src/Helpers/FirebaseEvents";

import defaultAppConfig from "./src/Config";
import { initRemoteConfig } from "./src/Helpers/RemoteConfig";

// initRemoteConfig(defaultAppConfig);
// disableInAppMessages();
// initFCM();
// handleDeeplinks();
// logEvent('appInit', {
// 	awesome: true,
// }).then(() => console.log('App Logged!'));
// enableInAppMessages();

AppRegistry.registerComponent(appName, () => App);
