import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '@shoutem/ui';

import styles from './styles';

export default class TodayScreen extends React.Component {
  static navigationOptions = {
    title: 'Today',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>These be today issues</Text>
            <Button stleName="secondary">
              <Text>CHECK IN HERE</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
