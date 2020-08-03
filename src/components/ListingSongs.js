import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Screen from './Screen';

import style from '../config/styles';
import colors from '../config/colors';

const ListingSongs = ({title, thumbnail, style, songStyle}) => {
  return (
    <Screen style={[styles.container, style]}>
      <Image source={{uri: thumbnail.url}} style={styles.image} />
      <View style={[styles.detailsContainer, songStyle]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.black,
  },
  detailsContainer: {},
  image: {
    width: 120,
    height: 90,
  },
  text: style.text,
});

export default ListingSongs;
