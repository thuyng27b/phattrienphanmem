import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Header({navigation, title}) {
  return {
    headerTitle: () => (
      <Text style={{color: 'white', fontSize: 24}}>{...title}</Text>
    ),
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="bars" color="white" size={30} style={{marginLeft: 10}} />
      </TouchableOpacity>
    ),
    headerTitleStyle: {fontSize: 24},
    headerStyle: {backgroundColor: 'rgb(60,179,113)'},
  };
}

export default Header;
