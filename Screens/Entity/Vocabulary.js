import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
export default class Vocabulary extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View>
        <FlatList
          style={styles.flatShip}
          data={Data}
          numColumns={3}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Vocabulary');
                }}>
                <Image
                  style={{
                    marginLeft: 5,
                    marginTop: 20,
                    width: 70,
                    height: 70,
                  }}
                  source={item.img}
                />
                <Text style={{marginTop: 10, fontSize: 20, marginLeft: 5}}>
                  {item.content}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: 'rgb(60,179,113)	',
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  flatShip: {
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  barIcon: {
    marginTop: 20,
    marginLeft: 15,
  },
});

let Data = [
  {
    content: 'Greeting',
    img: require('../../src/VocabularyImage/greeting.png'),
  },
  {
    content: ' Travel',
    img: require('../../src/VocabularyImage/earth1.png'),
  },
  {
    content: '  Music',
    img: require('../../src/VocabularyImage/music1.png'),
  },

  {
    content: ' Friend',
    img: require('../../src/VocabularyImage/friend1.png'),
  },

  {
    content: '  Earth',
    img: require('../../src/VocabularyImage/earth1.png'),
  },

  {
    content: '   Food',
    img: require('../../src/VocabularyImage/eat1.png'),
  },

  {
    content: '  Sport',
    img: require('../../src/VocabularyImage/google_icon.png'),
  },

  {
    content: '   Time',
    img: require('../../src/VocabularyImage/time1.png'),
  },

  {
    content: '    Job',
    img: require('../../src/VocabularyImage/job1.webp'),
  },
  {
    content: ' Vehicle',
    img: require('../../src/VocabularyImage/verhicle1.png'),
  },
  {
    content: '  Nation',
    img: require('../../src/VocabularyImage/nation.png'),
  },
  {
    content: '   Drink',
    img: require('../../src/VocabularyImage/drink1.png'),
  },
];
