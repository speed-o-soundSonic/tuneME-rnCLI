import React, {useContext} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Screen from './Screen';

import SongsContext from '../contexts/songsContext';
import style from '../config/styles';
import {Constants} from 'react-native-unimodules';

const ListingSongs = ({
  title,
  thumbnail,
  style,
  songStyle,
  contentDetails,
  statistics,
}) => {
  const {colors} = useContext(SongsContext);
  const reg = new RegExp(/(\dM*)/g);
  const time = contentDetails.duration.match(reg).join('').replace('M', ':');
  return (
    <Screen
      style={[
        styles.container,
        style,
        {backgroundColor: colors.black, borderBottomColor: colors.medium},
      ]}>
      <View style={styles.image}>
        <Image source={{uri: thumbnail.url}} style={styles.image} />
        <Text style={[styles.duration]}>{time}</Text>
      </View>
      <View style={[styles.detailsContainer, songStyle]}>
        <Text style={[styles.text, {color: colors.white}]}>{title}</Text>
        <View style={styles.detailsContainerWrapper}>
          <Text style={[styles.detailsContainer, {color: colors.white}]}>
            Views {statistics.viewCount}
          </Text>
          <Text style={[styles.detailsContainer, {color: colors.white}]}>
            Likes: {statistics.likeCount}
          </Text>
          <Text style={[styles.detailsContainer, {color: colors.white}]}>
            Dislikes: {statistics.dislikeCount}
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: style.detailsContainer,
  detailsContainerWrapper: {},
  duration: style.duration,
  image: {
    width: 120,
    height: 90,
    position: 'relative',
  },
  text: style.text,
});

export default ListingSongs;
