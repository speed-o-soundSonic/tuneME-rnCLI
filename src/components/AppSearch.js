import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import style from '../config/styles';
import SongsContext from '../contexts/songsContext';

const AppSearch = ({style, onPress, setValue, ...otherProps}) => {
  const {colors} = useContext(SongsContext);
  return (
    <View style={[styles.container, style, {borderColor: colors.searchField}]}>
      <TextInput
        style={[styles.input, styles.text, {color: colors.white}]}
        onChange={setValue()}
        {...otherProps}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.icon,
            {backgroundColor: colors.black, borderColor: colors.searchIcon},
          ]}>
          <Ionicons name="md-search" size={20} color={colors.logo} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    // borderColor: '#020',
    borderWidth: 1,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
    borderRadius: 18,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#010',
    borderWidth: 1,
  },
  input: {
    height: 50,
    width: '90%',
    flex: -1,
    paddingLeft: 20,
  },
  text: style.text,
});

export default AppSearch;
