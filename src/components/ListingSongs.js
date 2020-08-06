import React, {useContext} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from './Screen';
import SongsContext from '../contexts/songsContext';
import style from '../config/styles';
import timeApi from '../utils/time';
import viewsApi from '../utils/views';

const ListingSongs = ({
  title,
  thumbnail,
  style,
  songStyle,
  contentDetails,
  statistics,
}) => {
  const {colors} = useContext(SongsContext);

  const time = timeApi(contentDetails);
  const views = viewsApi(statistics.viewCount);
  return (
    <Screen
      style={[
        styles.container,
        style,
        {backgroundColor: colors.black, borderBottomColor: colors.medium},
      ]}>
      <View style={styles.image}>
        <Image source={{uri: thumbnail.url}} style={styles.image} />
        <Text style={[styles.duration, {width: time.length > 5 ? 50 : 35}]}>
          {time}
        </Text>
      </View>
      <View style={[styles.detailsContainer, songStyle]}>
        <Text style={[styles.text, {color: colors.white}]}>{title}</Text>
        <View style={styles.detailsContainerWrapper}>
          <Text style={[styles.detailsContainer, {color: colors.white}]}>
            <Text style={{fontWeight: '600'}}>Views </Text>
            {views}
          </Text>
          <Text style={[styles.detailsContainer, {color: colors.white}]}>
            {<Icon name="thumb-up-outline" size={15} />} {statistics.likeCount}
          </Text>
          <Text style={[styles.detailsContainer, {color: colors.white}]}>
            {<Icon name="thumb-down-outline" size={15} />}{' '}
            {statistics.dislikeCount}
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
    alignSelf: 'center',
  },
  text: style.text,
});

export default ListingSongs;
