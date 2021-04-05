import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { connect } from "react-redux";
import { setIsLoading } from "../Stores/Actions/";

import { AppLoader } from '../Components';
import DrawerMenu from './DrawerMenu';

class MainNavigator extends React.Component {

	componentDidMount() {
		setTimeout(() => this.props.setIsLoading(false), 100);
	}

	render() {
		return (
			<NavigationContainer>
				<>
					<DrawerMenu />
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