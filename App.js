import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {Provider} from 'react-redux'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'

import configureStore from './stores/store'
const store = configureStore()




class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});


const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
}, {

  })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
