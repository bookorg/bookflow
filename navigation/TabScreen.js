import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BookSearch from '../components/BookSearch.js';
import Profile from '../components/Profile.js';
import Friends from '../components/Friends.js';
import Basket from '../components/Basket.js';

const Tabs = {
  BookSearch: BookSearch,
  Profile: Profile,
  Friends: Friends,
  Basket: Basket,
}

const TabConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'BookSearch') {
        iconName = `search`;
      } else if (routeName === 'Profile') {
        iconName = `person`;
      } else if (routeName === 'Friends') {
        iconName = `people`;
      } else if (routeName === 'Basket') {
        iconName = `shopping-basket`;
      } 

      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#443355',
    inactiveTintColor: '#bbbbcc',
  },
}


export default createBottomTabNavigator(Tabs, TabConfig)