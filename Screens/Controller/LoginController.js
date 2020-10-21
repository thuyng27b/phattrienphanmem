import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from '../../Template/SideMenu';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import {AccessToken} from 'react-native-fbsdk';
import './UserController';
import './AuthController';
const Stack = createStackNavigator();
global.isLogin = 0;
global.grammarAchievements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
global.vocabularyAchievements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
global.userName = '';
global.userID = '';
global.userPicture = '';

global.loginFB = async (error, result) => {
  console.log('loginFB');
  await AccessToken.getCurrentAccessToken().then((data) => {
    console.log('ảnh người dùng ', global.userPicture);
    global.loginFirebase(data.accessToken);
    global.isLogin = 1;
  });
};
global.loginFirebase = (token) => {
  console.log('Firebase');
  if (token != null) {
    let credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(function (user) {
        console.log('người dùng ', user);
        global.userID = user.user.uid;
        global.userPicture = user.additionalUserInfo.profile.picture.data.url;
        console.log(user.additionalUserInfo.profile.picture);
        global.L.setState({repaint: 1});
        global.userName = user.user.displayName;
        global.save();
        global.getAuthUser();
      })
      .catch(function (error) {});
  } else {
    console.log('token người dùng = null');
  }
};
global.logout = async () => {
  console.log('logout');
  global.remove();
  global.isLogin=0;
  global.L.setState({repaint: 1});
};
export default class LoginController extends Component {
  constructor(props) {
    super(props);
    global.resume();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Login'}
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name={'Grammar'}
            component={SideMenu}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
