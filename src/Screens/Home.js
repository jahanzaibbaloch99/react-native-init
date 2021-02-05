import React, { Component } from "react";
import { View, Text } from 'react-native';

import { connect } from "react-redux";
import { sayHelloWorld } from "../Stores/Actions";

class Home extends Component {

	componentDidMount() {

		this.props.sayHelloWorld('Hello');

	}

	render() {
		return (<View><Text>{this.props.text}</Text></View>);
	}
}

const mapStateToProps = ({ HelloWorldReducer }) => {
	return {
		text: HelloWorldReducer?.text,
	};
};

const mapDispatchToProps = (dispatch) => ({
	sayHelloWorld: (payload) => dispatch(sayHelloWorld(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);