import React from "react";
import { DrawerButton } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Details from '../Screens/Details';
import { Button, Image, TouchableOpacity } from 'react-native';

import Icons from "../Assets/index";

const Stack = createStackNavigator();

function MainScreens() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ navigation }) => {
					return {
						headerLeft: () => (
							<TouchableOpacity onPress={() => {
								navigation.toggleDrawer();
							}}>
								<Image
									style={{ width: 18, height: 15, marginLeft: 10, }}
									source={Icons.hamburgerIcon}
								/>
							</TouchableOpacity>
						),
					};
				}} />
			<Stack.Screen name="Detail" component={Details} />
		</Stack.Navigator>
	);
}

export default MainScreens;