import React from 'react';
import { Text, View } from 'react-native';
import RootStack from './navigation/RootStack';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

