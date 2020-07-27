import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AppSearch from "../components/AppSearch";
import ListingSongs from "../components/ListingSongs";

const SearchScreen = (props) => {
  const [value, setValue] = useState("");
  const [videos, setVideos] = useState([]);

  const handleFetch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}&type=video&key=AIzaSyBNrPNjDGE4NZstgOdUhPkqhxn7ZssBgPE`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  };

  const handleValue = () => (e) => {
    setValue(e.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <AppSearch
        style={styles.appSearch}
        onPress={handleFetch}
        setValue={handleValue}
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {videos.length !== false && (
        <FlatList
          data={videos}
          keyExtractor={({ id }) => id.videoId}
          renderItem={({ item }) => {
            return (
              <ListingSongs
                title={item.snippet.title}
                description={item.snippet.description}
                thumbnail={item.snippet.thumbnails.default}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appSearch: {
    marginTop: 10,
  },
  container: {
    padding: 10,
    flex: 1,
  },
});

export default SearchScreen;
