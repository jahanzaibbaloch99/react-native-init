import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NoDataFound(props) {
    return (
        <View style={props.style}>
            {props.show && (
                <View style={{ alignItems: 'center', }}>
                    <Icon name={props.icon} size={100} color={"lightgrey"} />
                    <Text style={{ marginTop: 20, }}>{props.text}</Text>
                </View>
            )}
        </View>
    );
}

NoDataFound.defaultProps = {
    style: {},
    icon: 'box-open',
    text: 'No results found'
}