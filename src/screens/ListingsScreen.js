import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Screen from '../components/Screen';
import AppSong from '../components/AppSong';
import SongsContext from '../contexts/songsContext';

const music = [
  {
    title: 'title 1',
    artist: 'artist 1',
    value: 1,
  },
  {
    title: 'title 2',
    artist: 'artist 2',
    value: 2,
  },
  {
    title: 'title 3',
    artist: 'artist 3',
    value: 3,
  },
];

const ListingsScreen = ({navigation}) => {
  const {cachedVideos, handleChangeVideo, setIndex} = useContext(SongsContext);

  return (
    <Screen style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={cachedVideos.videoDetails}
        keyExtractor={(song) => song.id.videoId.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const newCachedVideos = cachedVideos;
                newCachedVideos.index = index;
                setIndex(null);
                handleChangeVideo(newCachedVideos);
                navigation.navigate('Playing');
              }}>
              <AppSong
                image={item.snippet.thumbnails.default}
                title={item.snippet.title}
                style={styles.song}
                songStyle={styles.songStyle}
              />
            </TouchableOpacity>
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  song: {
    marginBottom: 1,
    // borderColor: 'white',
    // borderBottomWidth: 1,
    borderBottomColor: 'white',
    flex: -1,
  },
  songStyle: {
    flex: -1,
    width: '100%',
    borderBottomWidth: 1,
    color: 'white',
    padding: 10,
  },
});

export default ListingsScreen;
