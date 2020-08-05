import React, {useContext} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Screen from './Screen';

import SongsContext from '../contexts/songsContext';
import style from '../config/styles';

const ListingSongs = ({title, thumbnail, style, songStyle}) => {
  const {colors} = useContext(SongsContext);
  return (
    <Screen
      style={[
        styles.container,
        style,
        {backgroundColor: colors.black, borderBottomColor: colors.medium},
      ]}>
      <Image source={{uri: thumbnail.url}} style={styles.image} />
      <View style={[styles.detailsContainer, songStyle]}>
        <Text style={[styles.text, {color: colors.white}]}>{title}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {},
  image: {
    width: 120,
    height: 90,
  },
  text: style.text,
});

export default ListingSongs;
