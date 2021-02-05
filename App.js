import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Screens/Home";

import { Provider as ReduxProvider } from "react-redux";
import store from './src/Stores';

const Stack = createStackNavigator();
export default class App extends Component {
	render() {
		return (
			<ReduxProvider store={store}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={Home} />
					</Stack.Navigator>
				</NavigationContainer>
			</ReduxProvider>
		);
	}
}