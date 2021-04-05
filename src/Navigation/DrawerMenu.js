
import React from "react";

import {
	createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList
} from "@react-navigation/drawer";

import Settings from '../Screens/Settings';
import MainScreens from './MainScreens';
import { Image, Text, View } from 'react-native';
import Icons from "../Assets/index";

const screens = {
	'Home': MainScreens,
	Settings,
};

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
	console.log('map', props.state.routes);
	return (
		<DrawerContentScrollView {...props}>
			<View style={{ alignItems: 'center', marginVertical: 50, }}>
				<Image source={Icons.hamburgerIcon} />
			</View>
			<DrawerItemList {...props} itemStyle={{
				backgroundColor: 'transparent',
			}} />
		</DrawerContentScrollView>
	);
}

function DrawerMenu() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => DrawerContent(props)}
			options={{
				headerShown: true,
				swipeEnabled: false,
			}}>
			{
				Object.keys(screens).map((key) => {
					return <Drawer.Screen key={key} options={{
						swipeEnabled: false,
					}} name={key} component={screens[key]} />;
				})
			}
		</Drawer.Navigator>
	);
}

export default DrawerMenu;