import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { MobileNavi } from './src/navigation/DrawerNavigation';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MobileNavi  />
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
