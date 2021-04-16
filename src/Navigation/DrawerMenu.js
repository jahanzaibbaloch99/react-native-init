
import React from "react";
import {
	createDrawerNavigator, DrawerContentScrollView, DrawerItemList
} from "@react-navigation/drawer";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import { Image, View, TouchableOpacity } from 'react-native';
import { MainScreens, DrawerScreens } from "../Navigation/Screens";
import Icons from "../Assets/index";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent(props) {
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

const HomeStack = function () {
	return (
		<Stack.Navigator>
			{Object.keys(MainScreens).map((key) => {
				return (
					<Stack.Screen key={key} name={key} component={MainScreens[key]} options={(nav) => {
						return {
							headerLeft: () => (nav.route.name === "Home" ?
								<TouchableOpacity onPress={() => {
									nav.navigation.toggleDrawer();
								}}>
									<Image
										style={{ width: 18, height: 15, marginLeft: 10, }}
										source={Icons.hamburgerIcon}
									/>
								</TouchableOpacity> : <HeaderBackButton onPress={() => nav.navigation.goBack()} />
							),
						};
					}} />
				);
			})}
		</Stack.Navigator>
	);
};

const DrawerStack = function () {
	return (<Stack.Navigator>
		{Object.keys(DrawerScreens).map((key) => {
			return (
				<Stack.Screen key={key} name={key} component={DrawerScreens[key]} options={(nav) => {
					return {
						headerLeft: () => (<HeaderBackButton onPress={() => nav.navigation.goBack()} />),
					};
				}} />
			);
		}
		)}
	</Stack.Navigator>);
};

function DrawerMenu() {
	return (
		<Drawer.Navigator
			initialRouteName={"Home"}
			overlayColor="transparent"
			drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen component={HomeStack} name="Home" />
			<Drawer.Screen component={DrawerStack} name="Drawer" />
		</Drawer.Navigator>
	);
}

export default DrawerMenu;