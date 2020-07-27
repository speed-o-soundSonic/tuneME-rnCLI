import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AppSong = ({ title, artist, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{title}</Text>
      <Text>{artist}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppSong;
