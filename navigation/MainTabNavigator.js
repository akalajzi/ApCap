import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { ChatScreen, TasksScreen, TodayScreen, SettingsScreen } from 'screens';
import TabBarIcon from 'components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen'; // TODO: remove

const TodayStack = createStackNavigator({ Today: TodayScreen });
TodayStack.navigationOptions = {
  tabBarLabel: 'Today',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="activity" />,
};

const ChatStack = createStackNavigator({ Chat: ChatScreen });
ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="message-circle" />,
};

const TasksStack = createStackNavigator({ Tasks: TasksScreen });
TasksStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="calendar" />,
};

const HomeStack = createStackNavigator({ Home: HomeScreen });
HomeStack.navigationOptions = {
  tabBarLabel: 'Example',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
};

const SettingsStack = createStackNavigator({ Settings: SettingsScreen });
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="settings" />,
};

export default createBottomTabNavigator({
  TodayStack,
  ChatStack,
  TasksStack,
  HomeStack,
  SettingsStack,
});
