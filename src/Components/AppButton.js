import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import SmartImage from './SmartImage';

const AppButton = ({
	textStyle,
	onPress,
	children,
	containerStyles,
	disabled,
	iconOnly,
}) => (
	<TouchableOpacity
		activeOpacity={0.6}
		disabled={disabled}
		onPress={onPress}
		style={{ flex: 1, }}
	>
		{iconOnly ? (
			<SmartImage
				source={iconOnly}
				style={{ ...styles.appButtonText, height: 40, width: 40 }}
			/>
		) : (
			<Text style={[styles.appButtonText, textStyle]}>{children}</Text>
		)}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	appButtonContainer: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 20,
	},
	appButtonText: {
		fontSize: 16,
		color: '#fff',
		alignSelf: 'center',
	},
});

export default AppButton;
