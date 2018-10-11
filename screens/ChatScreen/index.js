import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './styles';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text>Chat screen</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
