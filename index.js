import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { initFCM } from "./src/Helpers/FCM";

initFCM();

AppRegistry.registerComponent(appName, () => App);
