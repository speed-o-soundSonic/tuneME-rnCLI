import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

import useVideo from '../hooks/useVideo';
import SongsContext from '../contexts/songsContext';
import Video from 'react-native-video';
import DownloadButton from '../components/DownloadButton';
import {useIsFocused} from '@react-navigation/native';

const PlayingScreen = ({navigation}) => {
  const {
    videos,
    index,
    cachedVideos,
    handleSetCachedVideos,
    playVideo,
  } = useContext(SongsContext);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     console.log('yay');
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  const isFocused = useIsFocused();

  let path = cachedVideos.path[cachedVideos.index];

  if ((videos.length && index) || index === 0) {
    return (
      <View style={styles.container}>
        <DownloadButton
          handleDownload={
            useVideo(videos, index, cachedVideos, handleSetCachedVideos)
              .handleDownload
          }
        />
        <YouTube
          videoId={playVideo}
          play
          style={styles.backgroundVideo}
          origin="http://www.youtube.com"
        />
      </View>
    );
  }

  if (isFocused || !isFocused) {
    return (
      <Video
        key={path}
        source={{uri: path}}
        style={styles.backgroundVideo}
        controls
      />
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 300,
    flex: 1,
  },
  button: {
    backgroundColor: 'yellow',
    width: 40,
    position: 'absolute',
    zIndex: 1,
    borderRadius: 20,
    bottom: 695,
    right: 375,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  text: {
    color: 'white',
  },
});

export default PlayingScreen;