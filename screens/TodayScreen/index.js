import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Button } from '@shoutem/ui';

import styles from './styles';

export default class TodayScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? import('../../assets/images/robot-dev.png')
                  : import('../../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

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
