import React, { Component } from 'react';

import { Provider as ReduxProvider } from "react-redux";
import MainNavigator from './src/Navigation/MainNavigator';
import store from './src/Stores';
import SplashScreen from 'react-native-splash-screen'

export default function App(props) {
	React.useEffect(() => {
		SplashScreen.hide()
	}, [])
	return (
		<ReduxProvider store={store}>
			<MainNavigator />
		</ReduxProvider>
	);
}