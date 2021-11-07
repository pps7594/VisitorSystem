import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet, Text, StatusBar } from 'react-native';
import { MobileNavi } from './src/navigation/DrawerNavigation';

import store from './src/redux/store';

import colors from './src/config/colors';

export default function App() {
  return (
    <Provider store={store}>
      <MobileNavi  />
      <StatusBar backgroundColor={colors.background} barStyle="dark-content"/>
    </Provider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer:{
    marginTop:20
  }
});
