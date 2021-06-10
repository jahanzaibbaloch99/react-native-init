import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { InputBlock } from "../../Components/";
import { Images } from "../../Assets"
const ForgotPassword = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, [])
    const initialValues = { email: '', password: '' };
    const formSchema = Yup.object().shape({
        email: Yup.string().trim().email('Email must be valid').required('email is required').min(5).max(16),
        password: Yup.string().trim().required('password is required').min(5).max(16),
    });
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={Images.background}>
                <View style={{ flex: 1.2 }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ paddingHorizontal: 40, backgroundColor: "#00d563", borderRadius: 100, paddingVertical: 55 }}>
                            <Text style={{ color: "white", fontSize: 18 }}>PINCH</Text>
                        </View>
                    </View>
                </View>
                <View style={{ elevation: 1, flex: 2, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 25 }}>
                    <View>
                        <View style={{ paddingVertical: 5 }}>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold", }}>Forgot Password</Text>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ color: "black", opacity: 0.3 }}>Please enter your registered email to reset your password</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <View>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={formSchema}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View>
                                        <View style={{ marginHorizontal: 2 }}>
                                            <InputBlock
                                                label={'First Name'}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                placeholder={'ex: john@doe.com'}
                                                icon={"envelope"}
                                            />
                                            <View style={{ marginVertical: 5 }}>
                                                <ErrorMessage component={ErrorText} name="email" />
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            <TouchableOpacity onPress={handleSubmit} style={{ justifyContent: "center", padding: 15, backgroundColor: "#00d563", borderRadius: 10, alignItems: "center" }}>
                                                <Text style={{ color: "white", fontWeight: "bold" }} >Send</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { props.navigation.navigate("Login") }} style={{ marginVertical: 10, justifyContent: "center", padding: 10, alignItems: "center" }}>
                                                <Text style={{ color: "#00d563", fontWeight: "bold" }} >Back to Login?</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                            </Formik>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View >)
}
function ErrorText({ children }) {
    return <Text style={{ fontSize: 12, color: 'red', }}>{children}</Text>
}
export default ForgotPassword;