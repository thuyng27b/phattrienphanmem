import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import GrammarEntity from '../Entity/GrammarEntity';
import Practice from '../Practice';
import Result from '../Result';
import Grammar from '../Entity/Grammar';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
let G;
export default class GrammarController extends Component {
  constructor(props) {
    super(props);
    G = this;
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Text style={{color: 'white', fontSize: 24}}>NGỮ PHÁP</Text>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  G.props.navigation.dispatch(DrawerActions.openDrawer())
                }>
                <Icon
                  name="bars"
                  color="white"
                  size={30}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: 'rgb(60,179,113)'},
          }}
          name="Grammar"
          component={Grammar}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="GrammarEntity"
          component={GrammarEntity}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Practice"
          component={Practice}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    );
  }
}
