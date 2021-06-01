import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import facebook from './screens/fb';
import instagram from './screens/in';

export default class App extends React.Component {
  render(){
    return (

        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  facebook: {screen: facebook},
  instagram: {screen: instagram},
});

const AppContainer =  createAppContainer(TabNavigator);
