import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import GrammarController from '../Screens/Controller/GrammarController';
import VocabularyController from '../Screens/Controller/VocabularyController';
import Practice from '../Screens/Practice';
import Toeic600 from '../Screens/Toeic600';
import Login from '../Screens/Login';
import Privacy from '../Screens/Privacy';
import About from '../Screens/About';
function fox() {
  return <Fox />;
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'rgba(90,240,113,30)', color: 'white'}}
      {...props}>
      <DrawerItem
        label={() => fox()}
        style={{height: 100, width: 100}}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="NGỮ PHÁP" component={GrammarController} />
      <Drawer.Screen name="TỪ VỰNG" component={VocabularyController} />
      <Drawer.Screen name="LUYỆN TẬP" component={Practice} />
      <Drawer.Screen name="TOEIC 600+" component={Toeic600} />
      <Drawer.Screen name="TOEIC 800+" component={Toeic600} />
      <Drawer.Screen name="ĐĂNG NHẬP" component={Login} />
      <Drawer.Screen name="GÓP Ý" component={View} />
      <Drawer.Screen name="ĐIỀU KHOẢN" component={Privacy} />
      <Drawer.Screen name="VỀ CHÚNG TÔI" component={About} />
    </Drawer.Navigator>
  );
}
export class Fox extends Component {
  render() {
    return (
      <Image
        style={{width: 100, height: 100}}
        source={require('../src/mrfox.png')}
      />
    );
  }
}
export default function App() {
  return (
      <MyDrawer />
  );
}
