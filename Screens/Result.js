import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const correct = 'Số câu bạn đã làm đúng               ';
const unCorrect = 'Số câu bạn đã làm sai                ';
const unfinished = 'Số câu bạn chưa làm                  ';
let R;
export default class Result extends Component {
  constructor(props) {
    super(props);
    R = this;
  }

  render() {
    return (
      <View style={styles.style}>
        <View style={styles.titleFrame}>
          <Icon
            name="arrow-left"
            color="white"
            size={30}
            onPress={() => {
              this.props.navigation.replace('Grammar');
            }}
            style={{marginRight: 15}}
          />
          <Text style={styles.titleText}>{this.props.route.params.title}</Text>
        </View>
        <View>
          <Text style={styles.result}>
            {correct} {this.props.route.params.correct}
          </Text>
          <Text style={styles.result}>
            {unCorrect} {this.props.route.params.unCorrect}
          </Text>
          <Text style={styles.result}>
            {unfinished} {this.props.route.params.unfinished}
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={{width: 50, height: 50}}
            onPress={() => {
              this.props.navigation.replace('Practice', {
                title: R.props.route.params.title,
                key: R.props.route.params.key,
              });
            }}>
            <Icon name="arrow-circle-left" size={50} color="#42BDFB" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 50, height: 50}}
            onPress={() => {
              this.props.navigation.navigate('Grammar');
            }}>
            <Icon name="arrow-circle-right" size={50} color="#42BDFB" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'space-between',
  },
  result: {
    padding: 20,
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleFrame: {
    width: '100%',
    height: '8%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
