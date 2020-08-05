import React, {useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Screen from './Screen';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import SongsContext from '../contexts/songsContext';
import style from '../config/styles';

const AppSong = ({title, image, style, songStyle, renderRightActions}) => {
  const {colors} = useContext(SongsContext);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Screen
        style={[styles.container, style, {backgroundColor: colors.black}]}>
        <Image source={{uri: image.url}} style={styles.image} />
        <View style={styles.detailsContainer} style={songStyle}>
          <Text style={[styles.text, {color: colors.white}]}>{title}</Text>
        </View>
      </Screen>
    </Swipeable>
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

export default AppSong;
