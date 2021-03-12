import React, { Component } from 'react';

import { Provider as ReduxProvider } from "react-redux";
import MainNavigator from './src/Navigation/MainNavigator';
import store from './src/Stores';

export default class App extends Component {
	render() {
		return (
			<ReduxProvider store={store}>
				<MainNavigator />
			</ReduxProvider>
		);
	}
}