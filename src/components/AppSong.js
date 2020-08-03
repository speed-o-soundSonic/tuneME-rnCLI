import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Screen from './Screen';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';

const AppSong = ({title, image, style, songStyle, renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Screen style={[styles.container, style]}>
        <Image source={{uri: image.url}} style={styles.image} />
        <View style={styles.detailsContainer} style={songStyle}>
          <Text style={{color: 'white'}}>{title}</Text>
        </View>
      </Screen>
    </Swipeable>
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
});

export default AppSong;
