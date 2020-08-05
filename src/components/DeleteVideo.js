import React, {useContext} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SongsContext from '../contexts/songsContext';

const DeleteVideo = ({onPress}) => {
  const {colors} = useContext(SongsContext);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, {backgroundColor: colors.logo}]}>
        <MaterialCommunityIcons name="trash-can" size={35} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ff5252',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DeleteVideo;
