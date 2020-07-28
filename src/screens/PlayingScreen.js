import React, {useContext} from 'react';
import {View, StyleSheet, Text, Constants} from 'react-native';
import YouTube from 'react-native-youtube';

import SongsContext from '../contexts/songsContext';

const AppPlaying = (props) => {
  const {videos, index} = useContext(SongsContext);

  if (videos.length) {
    return (
      <YouTube
        videoId={videos[index].id.videoId}
        play
        style={styles.backgroundVideo}
      />
    );
  }

  return null;
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 300,
    flex: 1,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
  },
});

export default AppPlaying;
