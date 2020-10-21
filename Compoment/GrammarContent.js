import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

export default class GrammarContent extends Component {
  constructor({props}) {
    super(props);
  }
  render() {
    switch (this.props.type) {
      case 2:
        return <Text Style={{color: 'red'}}>123456</Text>;
      case 1:
        return <Text Style={styles.cot}>0000100</Text>;
      case 3:
        return <Text Style={styles.exm}>{this.props.content}</Text>;
      case 4:
        return <Text Style={styles.img}>{this.props.content}</Text>;
    }
  }
}
const styles = StyleSheet.create({
  gra: {
    borderColor: 'green',
    borderWidth: 2,
    fontSize: 24,
    color: '#FFFFFF',
  },
  cot: {
    color: 'black',
    fontSize: 50,
  },
  exm: {
    borderColor: '#a5a5a5',
    borderWidth: 1,
    fontSize: 15,
    color: '#501500',
  },
  img: {
    fontSize: 80,
    color: 'blue',
  },
});
