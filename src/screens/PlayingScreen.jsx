import React from "react";
import { View, StyleSheet, Text, Constants } from "react-native";
import { WebView } from "react-native-webview";

const AppPlaying = (props) => {
  return (
    <WebView source={{ uri: "https://youtube.com/watch?v=q2PWupjNQ4g" }} />
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 300,
    height: 300,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  text: {
    color: "white",
  },
});

export default AppPlaying;
