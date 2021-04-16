import React from "react";
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {

	const navigation = useNavigation();

	return (
		<View>
			<Text>Settings Screen</Text>
			<Button title={"Settings 2"} onPress={() => {
				navigation.navigate('Settings2');
			}} />
		</View>
	);
}