import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

import Screen from '../components/Screen';
import AppSong from '../components/AppSong';
import SongsContext from '../contexts/songsContext';
import DeleteVideo from '../components/DeleteVideo';

const ListingsScreen = ({navigation}) => {
  const {
    cachedVideos,
    handleSetCachedVideos,
    handleChangeVideo,
    setIndex,
    colors,
  } = useContext(SongsContext);

  const handleDeleteVideo = (index) => async () => {
    const keys = await AsyncStorage.getItem('videoData').then((videoData) =>
      JSON.parse(videoData),
    );

    const path = keys.path.splice(index, 1);
    keys.videoDetails.splice(index, 1);
    await AsyncStorage.removeItem('videoData');
    handleSetCachedVideos(keys);

    RNFetchBlob.fs.unlink(path.join(''));
  };

  return (
    <Screen style={[styles.container, {backgroundColor: colors.black}]}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={cachedVideos.videoDetails}
        keyExtractor={(song) => song.id.videoId.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableHighlight
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
                style={[
                  styles.song,
                  {
                    backgroundColor: colors.black,
                    borderBottomColor: colors.medium,
                  },
                ]}
                songStyle={[styles.songStyle, {color: colors.white}]}
                renderRightActions={() => (
                  <DeleteVideo onPress={handleDeleteVideo(index)} />
                )}
              />
            </TouchableHighlight>
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
    flex: -1,
    borderBottomWidth: 1,
  },
  songStyle: {
    flex: -1,
    width: '100%',
    padding: 10,
  },
});

export default ListingsScreen;
