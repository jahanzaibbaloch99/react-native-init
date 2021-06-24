import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"

const ModifiedHeader = (props) => {
    const { container, mainView, iconView, titleView, title, onPress } = props
    return (<View style={[styles.container, container]}>
        <View style={[styles.mainView, mainView]}>
            <TouchableOpacity onPress={onPress} style={[styles.iconView, iconView]}><Icon color="black" size={40} name="chevron-circle-left" /></TouchableOpacity>
            <View style={[styles.titleView, titleView]}><Text style={{ fontSize: 22, fontWeight: "bold" }}>{title}</Text></View>
        </View>

    </View>)
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 5, justifyContent: "center" },
    mainView: { flexDirection: "row", justifyContent: "space-around", marginHorizontal: 15 },
    titleView: {
        flex: 5, alignItems: "flex-start", justifyContent: "center"
    },
    iconView: {
        flex: 1, justifyContent: "center"
    }
})
export default ModifiedHeader;
