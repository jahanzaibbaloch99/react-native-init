import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { InputBlock, DropDown } from "../../Components";
import Icon from "react-native-vector-icons/FontAwesome5"

const Header = (props) => {
    return (<View style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 10, marginTop: 20, marginBottom: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* <Text>Logo</Text> */}
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Employees</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#00d563" }}>+Employee</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
};

const ListItem = (props) => {
    const data = [
        { id: "1", value: "source" },
        { id: "1", value: "source" },
        { id: "1", value: "source" },
        { id: "1", value: "source" }
    ]
    return (
        <TouchableOpacity style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            backgroundColor: "white",
            paddingVertical: 20,
            borderRadius: 15
        }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, opacity: 0.8 }}>Audrey Sterwat</Text>
            </View>
            <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <View style={{ marginHorizontal: 7, backgroundColor: "#e5fbef", padding: 5, borderRadius: 5 }}><Text style={{ opacity: 0.6 }}>Delivery Driver</Text></View>
                <View style={{ marginHorizontal: 7, height: 10, width: 10, backgroundColor: "#00d563", borderRadius: 100 }}></View>
            </View>
        </TouchableOpacity>
    )
}
const Listing = (props) => {
    const staticData = [
        "All", "Active", "Inactive", "Terminated"
    ];
    const [selected, setSelected] = React.useState(-1)
    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])
    const [index, setIndex] = React.useState(-1)
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView nestedScrollEnabled={true} style={{ padding: 10 }}>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <View style={{ flex: 2, marginHorizontal: 2 }}>
                        <InputBlock placeholder={"Search by name"} icon={"search"} />
                    </View>
                    <View style={{ flex: 1 }}>

                        <DropDown
                            dropdownStyle={{ width: 110, borderRadius: 10, overflow: "hidden" }}
                            dataSource={staticData}
                            index={index}
                            onSelect={setIndex}
                        >
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View>
                                    <Text>{staticData[index] ?? "Select"}</Text>
                                </View>
                                <View>
                                    <Icon name="angle-down" size={20} color="#00d563" />
                                </View>
                            </View>
                        </DropDown>
                    </View>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <ListItem />
                </View>
            </ScrollView>
        </View>
    )
};

export default Listing;