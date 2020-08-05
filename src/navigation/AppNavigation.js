import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListingsScreen from '../screens/ListingsScreen';
import PlayingScreen from '../screens/PlayingScreen';
import SearchScreen from '../screens/SearchScreen';
import SongsContext from '../contexts/songsContext';

const Tab = createBottomTabNavigator();

const AppNavigation = (props) => {
  const {colors} = useContext(SongsContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.logo,
        inactiveTintColor: colors.white,
        activeBackgroundColor: colors.black,
        inactiveBackgroundColor: colors.black,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="md-search" color={color} size={size} />;
          },
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-play" color={color} size={size} />
          ),
        }}
        name="Playing"
        component={PlayingScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="ios-list" color={color} size={size} />;
          },
        }}
        name="Songs"
        component={ListingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigation;
