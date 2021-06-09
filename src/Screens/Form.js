import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorStrings } from "../Helpers/Strings";

export default function Form() {

    const initialValues = { first_name: '', last_name: '', email: '', age: '', };

    const formSchema = Yup.object().shape({
        first_name: Yup.string().trim().required(ErrorStrings.string_required).min(5).max(16),
        last_name: Yup.string().trim().required(ErrorStrings.string_required).min(5).max(16),
        email: Yup.string().trim().email('This is not a valid email address').required(ErrorStrings.string_required),
        age: Yup.number().min(1).max(25).required(ErrorStrings.string_required)
    });

    const onFormSubmit = (values) => {
        console.log('form', values);
    }

    return (
        <View style={{ paddingHorizontal: 10, flex: 1, }}>
            <ScrollView>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onFormSubmit}
                    validationSchema={formSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, margin: 5, }}>
                                    <InputBlock
                                        label={'First Name'}
                                        onChangeText={handleChange('first_name')}
                                        onBlur={handleBlur('first_name')}
                                        value={values.first_name}
                                        placeholder={'ex: Frank'}
                                    />
                                    <ErrorMessage component={ErrorText} name="first_name" />
                                </View>
                                <View style={{ flex: 1, margin: 5, }}>
                                    <InputBlock
                                        label={'Last Name'}
                                        onChangeText={handleChange('last_name')}
                                        onBlur={handleBlur('last_name')}
                                        value={values.last_name}
                                        placeholder={'ex: Abignale'}
                                    />
                                    <ErrorMessage component={ErrorText} name="last_name" />
                                </View>
                            </View>
                            <View>
                                <View style={{ flex: 1, margin: 5, }}>
                                    <InputBlock
                                        label={'Email'}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder={'ex: frank.abignale@nsa.gov.us'}
                                    />
                                    <ErrorMessage component={ErrorText} name="email" />
                                </View>
                            </View>
                            <View>
                                <View style={{ flex: 1, margin: 5, }}>
                                    <InputBlock
                                        keyboardType={'number-pad'}
                                        label={'Age'}
                                        onChangeText={handleChange('age')}
                                        onBlur={handleBlur('age')}
                                        value={values.age}
                                        placeholder={'24'}
                                    />
                                    <ErrorMessage component={ErrorText} name="age" />
                                </View>
                            </View>
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    )
}

function InputBlock({ placeholder, label, icon, keyboardType, onChangeText, onBlur, value }) {
    return (
        <View>
            <Text style={{ fontWeight: 'bold', }}>{label}</Text>
            <View style={{
                elevation: 2,
                borderRadius: 7,
                backgroundColor: '#fff',
            }}>
                <TextInput
                    style={{
                        color: '#000',
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                    }}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    placeholderTextColor={'#aaa'}
                    placeholder={placeholder}
                    value={value}
                />
                {
                    icon != null && <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        paddingHorizontal: 10,
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

function ErrorText({ children }) {
    return <Text style={{ fontSize: 12, color: 'red', }}>{children}</Text>
}