import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { connect } from "react-redux";
import { setIsLoading } from "../Stores/Actions/";

import { AppLoader } from '../Components';

import { MainScreens } from "./Screens";

const Stack = createStackNavigator();

export default function MainNavigator(props) {
	return (
		<NavigationContainer>
			<>
				<Stack.Navigator>
					{Object.keys(MainScreens).map((key) => {
						return (
							<Stack.Screen key={key} name={key} component={MainScreens[key]} />
						);
					}
					)}
				</Stack.Navigator>
			</>
		</NavigationContainer>
	);
}