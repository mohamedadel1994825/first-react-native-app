import React, { Component } from 'react'
import { Width, Height, MyColors } from './components/consts';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App'
import MainComponent from './components/MainComponent';
import ThirdComponent from './components/ThirdComponent';
import DetailComponent from './components/DetailComponent';
import SplashScreen from './components/Splash'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator  = createStackNavigator({
MainScreen:{
    screen:MainComponent,
  
},
DetailScreen:{
    screen:DetailComponent
  
},
ThirdScreen:{
    screen:ThirdComponent,
    navigationOptions:{
        headerTitle:'Third',
    }
}
})
const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppNavigator
  });
const App1 = createAppContainer(InitialNavigator );
AppRegistry.registerComponent(appName, () => App1);
export {
    Width,
    Height,
    MyColors
}