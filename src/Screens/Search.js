import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
const Search = (props) => {
    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 15, marginTop: 20, marginBottom: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 5, marginRight: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-left' size={25} color="#00d563" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: 40, justifyContent: "center" }}><TextInput style={{ paddingHorizontal: 10, backgroundColor: "#eee", borderRadius: 10, color: "black" }} /></View>
            </View>
        </View>)
}
export default Search;