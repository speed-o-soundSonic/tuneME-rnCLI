import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Screen from './Screen';

const AppSong = ({title, image, style, songStyle}) => {
  return (
    <Screen style={[styles.container, style]}>
      <Image source={{uri: image.url}} style={styles.image} />
      <View style={styles.detailsContainer} style={songStyle}>
        <Text style={{color: 'white'}}>{title}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  detailsContainer: {},
  image: {
    width: 120,
    height: 90,
  },
});

export default AppSong;
