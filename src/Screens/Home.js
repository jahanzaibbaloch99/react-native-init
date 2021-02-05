import React, { Component } from "react";
import { View, Text } from 'react-native';

import { connect } from "react-redux";
import { sayHelloWorld } from "../Stores/Actions";

import { PostsService } from "../Services";

class Home extends Component {

	async componentDidMount() {

		this.props.sayHelloWorld('Hello World');

		// var response = await PostsService.getPosts();

		// console.log('response', response.data.length);

		// response = await PostsService.getPost(1);

		// console.log('response 2', response.data);

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