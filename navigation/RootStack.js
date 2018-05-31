import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from '../app/MainScreen';
import TabScreen from './TabScreen';

const stackScreens = {
  Home: {screen: MainScreen},
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      title: 'TabScreen'
    }
  }
}

const stackConfig = {
  initialRouteName: 'Home'
}

export default RootStack = createStackNavigator(stackScreens, stackConfig);

