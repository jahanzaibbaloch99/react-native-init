import React, { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Picker from 'react-native-modern-datepicker';

const DatePicker = (props) => {
    return (
        <TouchableOpacity onPress={() => props.togglePicker()}>
            <View style={{
                borderWidth: 0.5,
                borderColor: '#e5eaed',
                alignItems: "center",
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{ opacity: 0.5 }}>{props.selectedDate ?? 'Select a Date'}</Text>
                </View>
                <View>
                    {props.icon && <Icon name={props.icon} size={20} color={props.iconColor} />}
                </View>
            </View>
            {props.toggle && <Picker mode="calendar" {...props}
            />}
        </TouchableOpacity>
    )

};

export default DatePicker;