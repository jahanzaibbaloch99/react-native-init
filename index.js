import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { initFCM } from "./src/Helpers/FCM";

import checkForAppUpdates from "./src/Helpers/AutoUpdate";

initFCM();
// checkForAppUpdates();

AppRegistry.registerComponent(appName, () => App);
