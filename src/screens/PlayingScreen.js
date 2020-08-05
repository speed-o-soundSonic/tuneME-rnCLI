import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
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
    setIsLoading,
    colors,
  } = useContext(SongsContext);

  const isFocused = useIsFocused();
  let path = cachedVideos.path[cachedVideos.index];

  if ((videos.length && index) || index === 0) {
    return (
      <View style={styles.container}>
        <YouTube
          videoId={playVideo}
          play
          style={styles.backgroundVideo}
          origin="http://www.youtube.com"
          playInBackground={true}
        />
        <DownloadButton
          handleDownload={
            useVideo(
              videos,
              index,
              cachedVideos,
              handleSetCachedVideos,
              setIsLoading,
            ).handleDownload
          }
          style={[styles.button, {backgroundColor: colors.primary}]}
        />
      </View>
    );
  }

  if (isFocused || !isFocused) {
    if (path) {
      return (
        <Video
          key={path}
          source={{uri: path}}
          style={styles.backgroundVideo}
          controls
          playInBackground={true}
        />
      );
    } else
      return <View style={[styles.empty, {backgroundColor: colors.black}]} />;
  }
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 300,
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    borderRadius: 25,
    top: '10%',
    right: '2%',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  empty: {
    width: '100%',
    height: '100%',
  },
  // text: {
  //   color: colors.white,
  // },
});

export default PlayingScreen;
