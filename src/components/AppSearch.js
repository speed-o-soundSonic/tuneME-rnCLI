import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import style from '../config/styles';
import colors from '../config/colors';

const AppSearch = ({style, onPress, setValue, ...otherProps}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.input, styles.text]}
        onChange={setValue()}
        {...otherProps}
      />
      <TouchableHighlight onPress={onPress}>
        <View style={styles.icon}>
          <Ionicons name="md-search" size={20} color="#b00" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderColor: '#020',
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
    backgroundColor: colors.black,
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
