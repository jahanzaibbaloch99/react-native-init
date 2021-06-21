import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
const Search = (props) => {

    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])

    const [selectedTab, setSelectedTab] = React.useState("Delivery")

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 15, marginTop: 10, marginBottom: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 5, marginRight: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-left' size={25} color="#00d563" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: 40, justifyContent: "center" }}><TextInput placeholderTextColor="#aaa" placeholder="Search" style={{ paddingHorizontal: 10, backgroundColor: "#eee", borderRadius: 10, color: "black" }} /></View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => setSelectedTab("Delivery")} style={{ backgroundColor: selectedTab === "Delivery" ? "#00d563" : "#fff", padding: 10, borderRadius: 50, paddingHorizontal: 15 }}>
                        <Text style={{ color: selectedTab === "Delivery" ? "#fff" : "#00d563", fontWeight: "bold" }}>Delivery</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setSelectedTab("Pickup")} style={{ backgroundColor: selectedTab === "Pickup" ? "#00d563" : "#fff", padding: 10, borderRadius: 50, paddingHorizontal: 15 }}>
                        <Text style={{ color: selectedTab === "Pickup" ? "#fff" : "#00d563", fontWeight: "bold" }}>Pick-Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ height: 200, width: "100%" }}>
                    <Image resizeMode='contain' style={{ borderRadius: 10, width: '100%', height: "100%" }} source={require("../Assets/Images/sample.jpg")} />
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                    <View>
                        <Text>Title Heading</Text>
                    </View>
                    <View>
                        <Text>Star Rating</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Descrpition Of The Product</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <View>
                        <Text>Delivery Fees Section</Text>
                    </View>
                </View>
            </View>
        </View>)
}
export default Search;