import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from '../app/MainScreen';
import BookList from '../components/BookList';

const stackScreens = {
  Home: {screen: MainScreen},
  BookList: {screen: BookList}
}

const stackConfig = {
  initialRouteName: 'Home'
}

export default RootStack = createStackNavigator(stackScreens, stackConfig);

