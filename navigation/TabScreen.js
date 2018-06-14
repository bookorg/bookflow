import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyBooks from '../components/MyBooks.js';
import MapScreen from '../components/MapScreen.js';
import BookDetail from '../components/BookDetail.js';
import NewBook from '../components/NewBook.js';
const MapNavigator = createStackNavigator({
  Map: { screen: MapScreen },
  BookDetail: { screen: BookDetail },
})

const BookNavigator = createStackNavigator({
  MyBooks: { screen: MyBooks},
  NewBook: { screen: NewBook },
})

const Tabs = {
  MyBooks: BookNavigator,
  Map: MapNavigator,
}

const TabConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'MyBooks') {
        iconName = `library-books`;
      } else if (routeName === 'Profile') {
        iconName = `person`;
      } else if (routeName === 'Friends') {
        iconName = `people`;
      } else if (routeName === 'Basket') {
        iconName = `shopping-basket`;
      } else if (routeName === 'Upload') {
        iconName = `cloud-upload`;
      } else if (routeName == 'Map') {
        iconName= 'map'
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