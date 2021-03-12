import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Details from '../Screens/Details';

const Stack = createStackNavigator();

export default function MainNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Detail" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}