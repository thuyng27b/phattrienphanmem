import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import SideMenu from './SideMenu';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Categorys from '../Compoment/Categorys';
import GrammarController from '../Screens/GrammarController';

export default class Screen extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View>
        <View>
          <Image
            source={require('C:\\Users\\Sau\\Desktop\\app4\\src\\fox.png')}
            style={{width: 400, height: 400}}
          />
        </View>
        <View style={{flex: 1, width: '95%'}}>
          <TouchableOpacity style={styles.buttonFormat}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'green',
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#01B8BC',
  },
  footer: {
    flex: 9,
    backgroundColor: '#FFFFFF',
  },
});
