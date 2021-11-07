import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import MyIcon from '../components/MyIcon';

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggleDrawer}>
          <MyIcon ION black iconName="menu" padding10 fontSize30/>
        </TouchableOpacity>
      </View>
    );
};

export {NavigationDrawerStructure};