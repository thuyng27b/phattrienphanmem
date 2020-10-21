import firebase from '@react-native-firebase/app';

function SetAuth() {
  global.setAuthUser = async () => {
    console.log('set auth user');
    let userObj = {
      userName: global.userName,
      userPicture: global.userPicture,
      achievements: global.grammarAchievements,
    };
    console.log(userObj);
    if (global.userID != null) {
      const user = firebase.database().ref('user/' + global.userID);
      await user.set(userObj);
    }
  };
}
export default SetAuth();
