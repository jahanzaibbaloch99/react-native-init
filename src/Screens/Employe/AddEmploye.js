import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Header, DropDown } from "../../Components/"



const AddEmploye = (props) => {
    React.useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])
    const [index, setIndex] = React.useState(-1)
    const staticData = [
        "All", "Active", "Inactive", "Terminated"
    ];
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                isBack={true}
                title={"Add Employee"}
                backPress={() => props.navigation.goBack()}

            />
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <View style={{ marginVertical: 2 }}>
                            <Text style={{ fontWeight: "bold" }}>Status*</Text>
                        </View>
                        <View style={{ height: 45, width: '100%' }}>
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
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <View style={{ marginVertical: 2 }}>
                            <Text style={{ fontWeight: "bold" }}>Role*</Text>
                        </View>
                        <View style={{ height: 45 }}>
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
                </View>
            </View>
        </View>
    )
}

export default AddEmploye;