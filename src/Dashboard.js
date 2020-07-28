import  React  from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

const Dashboard = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= '#000000' />
            <Text style = {styles.dashboard}>Welcome to Navigators</Text>
            <View style = {styles.btnContainer}>
                <TouchableOpacity
                    style = {styles.userBtn}
                    onPress = {() => navigation.navigate('Tabs')}>
                    <Text style = {styles.btnTxt}>Go to Tabs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.userBtn}
                    onPress = {() => navigation.navigate('Drawer')}>
                    <Text style = {styles.btnTxt}>Go to Drawer</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
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
        backgroundColor: '#AB47BC',
    },
    dashboard: {
        fontSize: 30,
        margin: 10,
        color: '#18FFFF',
        textAlign: 'center'
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
        fontSize: 20,
        textAlign: 'center',
        color: '#000000'
    },
});

export default Dashboard;
