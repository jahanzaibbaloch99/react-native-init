import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { connect } from "react-redux";
import { setIsLoading } from "../Stores/Actions/";

import Home from "../Screens/Home";
import Details from '../Screens/Details';
import { AppLoader } from '../Components';

const Stack = createStackNavigator();

class MainNavigator extends React.Component {

	componentDidMount() {
		setTimeout(() => this.props.setIsLoading(false), 1500);
	}

	render() {
		return (
			<NavigationContainer>
				<>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Detail" component={Details} />
					</Stack.Navigator>
					{ this.props.isLoading && <AppLoader />}
				</>
			</NavigationContainer>
		);
	}
}

const mapStateToProps = ({ AppReducer }) => {
	return {
		isLoading: AppReducer.isLoading,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setIsLoading: (payload) => dispatch(setIsLoading(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);