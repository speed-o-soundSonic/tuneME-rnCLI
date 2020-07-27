import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppSong from "../components/AppSong";

const music = [
  {
    title: "title 1",
    artist: "artist 1",
    value: 1,
  },
  {
    title: "title 2",
    artist: "artist 2",
    value: 2,
  },
  {
    title: "title 3",
    artist: "artist 3",
    value: 3,
  },
];

const ListingsScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={music}
        keyExtractor={(song) => song.value.toString()}
        renderItem={({ item }) => {
          return (
            <AppSong
              title={item.title}
              artist={item.artist}
              style={styles.song}
            />
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  song: {
    marginBottom: 1,
    borderColor: "black",
    borderBottomWidth: 1,
  },
});

export default ListingsScreen;
