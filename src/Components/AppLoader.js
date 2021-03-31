import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function AppLoader() {
	return (
		<View style={{
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(255, 255, 255, 0.5)',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<ActivityIndicator size="large" color="#00ff00" />
		</View>
	);
}