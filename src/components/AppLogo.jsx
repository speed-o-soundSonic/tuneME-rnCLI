import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Logo = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name="music-accidental-flat"
        size={35}
        color="red"
      />
      <Text style={styles.logo}>
        tune<Text style={styles.nestedLogo}>ME</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    fontSize: 23,
    color: "#5ee643",
    fontFamily: "Courier",
  },
  nestedLogo: {
    color: "#889efc",
  },
});

export default Logo;
