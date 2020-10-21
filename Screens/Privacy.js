import React, {Component} from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default class Privacy extends Component {
    state={
    };

    constructor(props) {
        super(props)
    }

    static propTypes = {
    };

    componentDidMount() {
    }

    render() {
        return (
            <View
                style={styles.style}>
                <Text>Hello</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    style: {
    },
});
