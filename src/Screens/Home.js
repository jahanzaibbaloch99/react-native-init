import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { FastImage } from "../Components";

export default function Home(props) {

	return (
		<View>

			<AppIntro title={"React Native Simple Boilerplate"} />

		</View>
	);

}

function AppIntro(props) {
	return (
		<View>
			<Text style={styles.heading}>
				{props.title}
			</Text>
			<Text style={styles.paragraph}>
				A simple react native project with only essential things that are required to build a great app
				</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		paddingTop: 30,
		paddingBottom: 10,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	paragraph: {
		padding: 15,
		textAlign: 'center'
	},
	sampleImage: {
		width: 100,
		height: 100,
		marginTop: 50,
		borderRadius: 10,
		alignSelf: 'center'
	}
});