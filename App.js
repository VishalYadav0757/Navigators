import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard'
import Signup from './src/Signup';
import Tabs from './src/Tabs';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Dashboard: Dashboard,
    Tabs: Tabs
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(AppNavigator);