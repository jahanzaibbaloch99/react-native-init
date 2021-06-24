import React, { useState } from 'react';
import { View, Image, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from "../Themes";

export default function SmartImage(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadingErrored, setLoadingErrored] = useState(false);

    return (
        <View style={{
            width: props.style.width,
            height: props.style.height,
            alignItems: "center",
            justifyContent: "center",
        }}>
            {!loadingErrored && (
                <Image {...props}
                    onLoadStart={() => {
                        setIsLoading(true)
                        setLoadingErrored(false)
                    }}
                    onLoadEnd={() => {
                        setIsLoading(false)
                    }}
                    onError={() => {
                        setIsLoading(false)
                        setLoadingErrored(true)
                    }}
                />
            )}
            {isLoading && loadingTemplate(props)}
            {loadingErrored && <ErrorTemplate {...props} />}
        </View>
    );
}

function loadingTemplate(props) {
    return (
        <ActivityIndicator
            style={{
                position: "absolute",
                zIndex: 2,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }}
            size="small"
            color={Colors.secondary}
        />
    );
}

function ErrorTemplate({ style: { width = 100, height = 100 } }) {
    return (
        <View style={{ width, height, justifyContent: 'center', alignItems: 'center', }}>
            <Icon name={"image"} color={"grey"} size={30} />
        </View>
    );
}
SmartImage.defaultProps = {
    style: {
        width: 100,
        height: 100,
    }
};