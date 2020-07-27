import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppSearch = ({style, onPress, setValue, ...otherProps}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} onChange={setValue()} {...otherProps} />
      <Ionicons name="md-search" size={25} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  input: {
    height: 50,
    width: '90%',
    flex: -1,
  },
});

export default AppSearch;
