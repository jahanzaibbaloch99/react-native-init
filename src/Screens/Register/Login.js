import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { InputBlock } from "../../Components/";
import { Images } from "../../Assets"
const Login = (props) => {
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
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground style={styles.flexContainer} source={Images.background}>
                <View style={styles.flexContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.circle}>
                            <Text style={styles.heroTitle}>PINCH</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.secondaryContainer}>
                    <View>
                        <View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login</Text>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ color: "black", opacity: 0.3 }}>Sign in to continue</Text>
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
                                        <View style={{ marginHorizontal: 2 }}>
                                            <InputBlock
                                                label={'Password'}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                                placeholder={'**********'}
                                                icon={"lock"}
                                                isSecured={true}
                                            />
                                            <View style={{ marginVertical: 5 }}>
                                                <ErrorMessage component={ErrorText} name="password" />
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => { props.navigation.navigate("ForgotPassword") }} style={{ marginVertical: 10, justifyContent: "center", padding: 10, alignItems: "center" }}>
                                            <Text style={{ color: "#00d563", fontWeight: "bold" }} >Forgot Password?</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleSubmit} style={{ justifyContent: "center", padding: 15, backgroundColor: "#00d563", borderRadius: 10, alignItems: "center" }}>
                                            <Text style={{ color: "white", fontWeight: "bold" }} >Login</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default Login;

function ErrorText({ children }) {
    return (<Text
        style={{ fontSize: 12, color: 'red' }}>
        {children}
    </Text>)
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "space-between"
    },
    flexContainer: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40
    },
    circle: {
        paddingHorizontal: 40,
        backgroundColor: "#00d563",
        borderRadius: 100,
        paddingVertical: 55
    },
    heroTitle: {
        color: "white",
        fontSize: 18
    },
    secondaryContainer: {
        elevation: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 25
    }
})
