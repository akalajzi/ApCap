import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './styles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text>Settings screen</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
