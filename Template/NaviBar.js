import React, {Component} from 'react';
import {Text, Button, StyleSheet, FlatList, View} from 'react-native';
import Categorys from '../Compoment/Categorys';

import GrammarController from '../Screens/GrammarController';


export default class NaviBar extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    let DATA = [
      {title: 'từ vựng'},
      {title: 'ngữ pháp'},
      {title: 'Kiểm tra'},
      {title: 'Toeic 800'},
      {title: 'Toeci 600'},
      {title: 'góp ý'},
      {title: 'Phản hồi'},
      {title: 'Điều khoản dịch vụ'},
    ];
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.style}>

              <Text>text</Text>

            </View>
          )}
          keyEctractor={(item) => item.titile}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
});
