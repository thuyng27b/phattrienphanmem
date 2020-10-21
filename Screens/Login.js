import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';
import '@react-native-firebase/database';
export default class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    global.L = this;
    this.state = {
      repaint: 0,
    };
  }
  static propTypes = {};
  componentDidMount() {}

  render() {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Text style={styles.titleApp}>FoxEnglish</Text>
        <Text style={styles.wordApp}>Learning is the eye of the mind</Text>
        <MrFox />
        <View style={styles.style}>
          <LoginButton
            onLoginFinished={(error, result) => {
              global.loginFB(error, result);
            }}
            onLogoutFinished={() => {
              global.logout();
            }}
          />
        </View>
      </View>
    );
  }
}
export class MrFox extends Component {
  render() {
    if (global.isLogin === 0) {
      console.log(' trả về fox ở chế độ chưa đăng nhạp');
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('../src/mrfox.png')} />
          <Text style={styles.textTitle}>Sign In With</Text>
        </View>
      );
    } else {
      console.log(' trả về fox ở chế độ đã đăng nhập');
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: global.userPicture}} />
          <Text style={styles.textTitle}>Xin Chào {global.userName}</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  titleApp: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(50,205,50)',
    textAlign: 'center',
    marginTop: 60,
  },
  wordApp: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  titleimage: {
    marginLeft: '5%',
    marginTop: '10%',
    height: '20%',
  },

  textTitle: {
    color: 'black',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 0,
    marginLeft: 0,
    width: 250,
    height: 250,
    borderRadius: 150,
  },
  style: {
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  facebook_text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  google_text: {
    fontSize: 24,
    color: 'black',
  },
  facebook_icon: {
    marginTop: 2,
  },
  facebook_button: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  google_button: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  google_icon: {
    marginTop: 3,
    marginLeft: -10,
    marginRight: 10,
  },
  google_image: {
    width: 28,
    height: 28,
  },
  facebook: {
    width: '40%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: '#3b5998',
    elevation: 7,
  },
  google: {
    alignItems: 'center',
    width: '40%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 7,
  },
  fox: {
    width: '30%',
    height: '10%',
  },
});
