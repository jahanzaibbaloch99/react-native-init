import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Form() {
    return (
        <View style={{ paddingHorizontal: 10, backgroundColor: '#fff', flex: 1, }}>
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, }}>
                        <InputBlock label={'First Name'} placeholder={'ex: Frank'} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <InputBlock label={'Last Name'} placeholder={'ex: Abignale'} />
                    </View>
                </View>
                <View>
                    <InputBlock label={'Last Name'} placeholder={'ex: frank.abignale@fbi.gov'} icon={'envelope'} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, }}>
                        <InputBlock label={'Password'} placeholder={'8 digits required'} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <InputBlock label={'Confirm Password'} placeholder={'8 digits required'} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, }}>
                        <InputBlock label={'Age'} placeholder={'ex: 52'} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <InputBlock label={'SSN'} placeholder={'ex: 6125'} icon={'pager'} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

function InputBlock({ placeholder, label, icon }) {
    return (
        <View style={{ margin: 5, }}>
            <Text style={{ fontWeight: 'bold', }}>{label}</Text>
            <View style={{
                elevation: 2,
                marginVertical: 5,
                borderRadius: 10,
                backgroundColor: '#fff',
            }}>
                <TextInput
                    style={{
                        color: '#000',
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                    }}
                    placeholderTextColor={'#aaa'}
                    placeholder={placeholder}
                />
                {
                    icon != null && <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        paddingHorizontal: 7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                    }}>
                        <Icon name={icon} size={15} color={'#777'} />
                    </View>
                }
            </View>
        </View>
    );
}