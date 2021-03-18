import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import handleDeeplinks from './src/Helpers/Deeplinks';

import { initFCM } from "./src/Helpers/FCM";

initFCM();
handleDeeplinks();

AppRegistry.registerComponent(appName, () => App);
