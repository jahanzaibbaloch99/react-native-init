import React, { Component } from "react";
import {
	View,
	ActivityIndicator
} from "react-native";

import FI from "react-native-fast-image";

export default class FastImage extends Component {
	state = {
		imageLoading: false,
	};

	render = () => {
		let imagePath = this.props.path;
		let imageStyle = this.props.imageStyle;

		return (
			<View>
				{this.state.imageLoading && (
					<ActivityIndicator
						style={{
							position: "absolute",
							zIndex: 2,
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							width: 130,
							height: 130,
							alignItems: "center",
							justifyContent: "center",
						}}
						size="large"
						color="#28B463"
					/>
				)}

				<FI
					style={imageStyle}
					onLoadStart={() => {
						this.setState({
							imageLoading: true,
						});
					}}
					onLoadEnd={() => {
						this.setState({
							imageLoading: false,
						});
					}}
					source={{
						uri: imagePath,
						priority: FI.priority.normal,
						cache: FI.cacheControl.immutable,
					}}
					resizeMode={FI.resizeMode.cover}
				/>
			</View>
		);
	};
}