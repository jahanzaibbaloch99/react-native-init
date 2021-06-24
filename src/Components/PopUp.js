import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native'
import Modal from 'react-native-modal';

export default function PopUp(props) {

    var childs = [];

    if (!Array.isArray(props.children))
        childs.push(props.children);
    else
        childs = props.children;

    const actions = childs.filter(({ type }) => type.name === PopUpAction.name)
    const otherChilds = childs.filter(({ type }) => type.name !== PopUpAction.name);

    return (
        <Modal
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            backdropOpacity={0.5}
            onBackdropPress={props.onBackdropPress}
            backdropTransitionInTiming={1}
            backdropTransitionOutTiming={1}
            isVisible={props.isVisible}>
            <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={20}>
                <View style={[styles.modalStyle]}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>{props.title}</Text>
                    </View>
                    <View>
                        {otherChilds}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: Platform.OS == 'android' ? 'flex-end' : 'space-evenly', marginTop: 20 }}>
                        {actions}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export function PopUpAction(props) {
    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
            <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', opacity: props.disabled ? 0.3 : 1 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

PopUpAction.defaultProps = {
    title: '',
    onPress: () => { },
    disabled: false,
}

PopUp.defaultProps = {
    title: ''
}

const styles = StyleSheet.create({
    modalStyle: {
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
    }
});