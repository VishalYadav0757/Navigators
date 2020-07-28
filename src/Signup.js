import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';

const Signup = ({navigation}) => {
    return(
         <View style = {styles.container}>
             <StatusBar barStyle="light-content" backgroundColor= '#000000' />
             <Text style = {styles.welcome}>Register Here</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Enter Username"/>
            <TextInput
                style = {styles.input}
                placeholder = "Enter Password"
                secureTextEntry/>
            <TextInput
                style = {styles.input}
                placeholder = "Enter Password Again"
                secureTextEntry/>
             <TouchableOpacity
                 style = {styles.userBtn}
                 onPress = {() => navigation.navigate('Login')}>
                 <Text style = {styles.btnTxt}>Go back to Login</Text>
             </TouchableOpacity>
         </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF5350',
    },
    welcome: {
        fontSize: 30,
        margin: 10,
        color: '#FFD700',
        textAlign: 'center'
    },
    input: {
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10
    },
    userBtn: {
        backgroundColor: '#FFD700',
        padding: 15,
        width: '45%'
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center'
    },
});

export default Signup;