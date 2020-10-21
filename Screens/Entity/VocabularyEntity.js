import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Tts from 'react-native-tts';
import firebase from '@react-native-firebase/app';
let VocabularyList;
let key;
export default class VocabularyEntity extends Component {
  state = {};
  loadFromDataBase = async () => {
    try {
      let q1 = firebase.database().ref('Vocabulary/V1');
      q1.on('value', (datasnap) => {
        VocabularyList = datasnap.val();
        console.log(VocabularyList);
        if (VocabularyList != null) {
          this.setState({repaint: 1});
        }
      });
    } catch (e) {}
  };
  constructor(props) {
    super(props);
    this.state = {repaint: 0};
    this.loadFromDataBase();
  }

  static propTypes = {};

  componentDidMount() {}
  speech(content) {
    Tts.stop();
    console.log('speech');
    Tts.speak(content);
  }
  render() {
    return (
      <ScrollView>
        <FlatList
          data={VocabularyList}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                onPress={() => {
                  this.speech(item.word);
                }}>
                <Text style={styles.word}>
                  {item.word}: {item.mean}
                </Text>
                <Text style={styles.word}>{item.read}</Text>
                <Text style={styles.word}>{item.explain}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.word}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Practice');
          }}>
          <Text style={styles.footerText}>Luyện Tập</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    height: 70,
    marginTop: 1,
    backgroundColor: '#e5e5e5',
    borderColor: '#bbbbbb',
    borderWidth: 2,
  },
  word: {
    marginLeft: '5%',
    fontSize: 15,
  },
  footerText: {
    color: 'rgb(0,191,255)	',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 10,
    marginTop: 10,
  },
});
