import AsyncStorage from '@react-native-community/async-storage';
function UserController() {
  global.resume = async () => {
    let userName = await AsyncStorage.getItem('userName');
    let userPicture = await AsyncStorage.getItem('userPicture');
    let userID = await AsyncStorage.getItem('userID');
    if (userID == null) {
      console.log('resume0');
      global.isLogin = 0;
      global.L.setState();
    } else {
      console.log('resum1');
      global.isLogin = 1;
      global.userName = userName;
      global.userPicture = userPicture;
      global.userID = userID;
      global.getAuthUser();
      global.L.setState();

    }
  };
  global.save = async () => {
    console.log('save');
    await AsyncStorage.setItem('userName', global.userName);
    await AsyncStorage.setItem('userPicture', global.userPicture);
    await AsyncStorage.setItem('userID', global.userID);
    console.log('userid', global.userID);
  };
  global.remove = async () => {
    console.log('remove');
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.removeItem('userPicture');
    await AsyncStorage.removeItem('userID');
  };
}
export default UserController();
