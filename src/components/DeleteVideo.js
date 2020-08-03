import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const DeleteVideo = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ff5252',
    backgroundColor: colors.logo,
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DeleteVideo;
