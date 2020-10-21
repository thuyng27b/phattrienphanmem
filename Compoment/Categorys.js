import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
const Categorys = ({navigation}) => {
  return (
    <View style={styles.style}>
      <View style={styles.style}>
        <Button
          title="go on"
          onPress={() => {
            navigation.navigate('Gramma');
          }}
        />
      </View>
      <Text>new</Text>
    </View>
  );
};
export default Categorys;
const styles = StyleSheet.create({
  style: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '0%',
  },
  /*
  recycle: {
    marginLeft: '0%',
    marginTop: '0%',
    margin: 0,
    borderRadius: 100,
    backgroundColor: 'green',
    width: '50%',
    height: '45%',
    borderColor: 'green',
    borderWidth: 1,
    flex: 1,
  },

   */
  title: {
    fontSize: 18,
    borderColor: 'green',
    borderWidth: 1,
    marginTop: '5%',
    marginLeft: '10%',
    marginBottom: '5%',
    flex: 5,
  },
});
