import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= '#000000' />
            <Text style = {styles.welcome}>Welcome</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Username"/>
            <TextInput
                style = {styles.input}
                placeholder = "Password"
                secureTextEntry/>
            <View style = {styles.btnContainer}>
                <TouchableOpacity
                    style = {styles.userBtn}
                    onPress = {() => navigation.navigate('Dashboard')}>
                    <Text style = {styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style = {styles.userBtn}
                  onPress = {() => navigation.navigate('Signup')}>
                  <Text style = {styles.btnTxt}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#004D40',
    },
    welcome: {
      fontSize: 30,
      margin: 10,
      color: '#ffffff',
      textAlign: 'center'
    },
    input: {
      width: '90%',
      backgroundColor: '#ffffff',
      padding: 15,
      marginBottom: 10
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%'
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
  
  export default Login;