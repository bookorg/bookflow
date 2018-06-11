import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BookSearch from '../components/BookSearch.js';
import Profile from '../components/Profile.js';
import Friends from '../components/Friends.js';
import Basket from '../components/Basket.js';
import MyBooks from '../components/MyBooks.js';
import BookUpload from '../components/BookUpload.js';

const Tabs = {
  BookSearch: BookSearch,
  MyBooks: MyBooks,
  Profile: Profile,
  Friends: Friends,
  Basket: Basket,
  Upload: BookUpload,
}

const TabConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'BookSearch') {
        iconName = `search`;
      } else if (routeName === 'MyBooks') {
        iconName = `library-books`;
      } else if (routeName === 'Profile') {
        iconName = `person`;
      } else if (routeName === 'Friends') {
        iconName = `people`;
      } else if (routeName === 'Basket') {
        iconName = `shopping-basket`;
      } else if (routeName === 'Upload') {
        iconName = `cloud-upload`;
      } 

      return <Icon name={iconName} size={20} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#443355',
    inactiveTintColor: '#bbbbcc',
  },
}


export default createBottomTabNavigator(Tabs, TabConfig)