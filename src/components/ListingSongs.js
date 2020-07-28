import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Screen from './Screen';

const ListingSongs = ({title, description, thumbnail}) => {
  return (
    <Screen style={styles.container}>
      <Image source={{uri: thumbnail.url}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  image: {
    width: 90,
    height: 120,
  },
});

export default ListingSongs;
