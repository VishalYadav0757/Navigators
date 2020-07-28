import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Signup from './Signup';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFCDD2' }}>
        <StatusBar barStyle="light-content" backgroundColor= '#000000' />
        <Text>Welcome to Home Tab !</Text>
      </View>
    );
  };
};

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFCDD2' }}>
        <StatusBar barStyle="light-content" backgroundColor= '#000000' />
        <Text>Welcome to Settings Tab !</Text>
      </View>
    );
  };
};

const TabNavigator = createBottomTabNavigator(
{
  Home: HomeScreen,
  Settings: SettingsScreen,
},
{
  tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        marginBottom: 15,
        padding: 0,
      }
  }
}
);

export default createAppContainer(TabNavigator);