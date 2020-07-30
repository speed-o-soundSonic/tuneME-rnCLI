import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

import useVideo from '../hooks/useVideo';
import SongsContext from '../contexts/songsContext';
import Video from 'react-native-video';
import DownloadButton from '../components/DownloadButton';

const AppPlaying = (props) => {
  const {videos, index, cachedVideos, setCachedVideos} = useContext(
    SongsContext,
  );

  let path = `/Users/donny/Library/Developer/CoreSimulator/Devices/3028B000-BCEF-46FD-8F4D-BD5AA648F4D2/data/Containers/Data/Application/01D481AA-44CC-45B9-BEE7-19C1A7C7A0E7/Documents/RNFetchBlob_tmp/RNFetchBlobTmp_crqpgyn59pqri2vklbo9.mp4`;

  console.log(cachedVideos);

  if ((videos.length && index) || index === 0) {
    return (
      <View style={styles.container}>
        <DownloadButton
          handleDownload={
            useVideo(videos, index, cachedVideos, setCachedVideos)
              .handleDownload
          }
        />
        <YouTube
          videoId={videos[index].id.videoId}
          play
          style={styles.backgroundVideo}
          origin="http://www.youtube.com"
        />
      </View>
    );
  }

  return <Video source={{uri: path}} style={styles.backgroundVideo} controls />;
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

export default AppPlaying;
