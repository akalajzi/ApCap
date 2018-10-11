import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './styles';

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text>Tasks screen</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
