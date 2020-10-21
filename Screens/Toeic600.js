import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Toeic600 extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    static propTypes = {};

    componentDidMount() {
    }

    render() {
        return (
            <View
                style={styles.style}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    style: {
    },
});
