import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ListingsScreen from "../screens/ListingsScreen";
import PlayingScreen from "../screens/PlayingScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const AppNavigation = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "red",
        inactiveTintColor: "black",
        activeBackgroundColor: "black",
        inactiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="md-search" color={color} size={size} />;
          },
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="md-play" color={color} size={size} />;
          },
        }}
        name="Playing"
        component={PlayingScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
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
