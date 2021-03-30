import React, { Component } from "react";
import { View, Text } from 'react-native';
import { getConfigVal } from "../Helpers/RemoteConfig";

export default function Details() {

	console.log('baseURI', getConfigVal('baseURI'));
	console.log('os', getConfigVal('os'));

	return (
		<View>
			<Text>Hello World</Text>
		</View>
	);
};