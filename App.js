import React from 'react';
import { Text, View } from 'react-native';
import RootStack from './navigation/RootStack';
import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

