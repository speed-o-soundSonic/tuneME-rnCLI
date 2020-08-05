import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/Ionicons';

import SongsContext from '../contexts/songsContext';

const Logo = (props) => {
  const {isEnabled, toggleSwitch, colors} = useContext(SongsContext);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.black}]}>
      <View style={styles.detailsContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 200, height: 40}}
        />
      </View>
      <View style={{paddingRight: 20}}>
        <Switch
          value={isEnabled}
          activeText={<Icon name="ios-moon" color={colors.medium} size={20} />}
          inActiveText={<Icon name="ios-star" color="yellow" size={20} />}
          onValueChange={toggleSwitch}
          useNativeDriver={false}
          backgroundActive={colors.dark}
          backgroundInactive={colors.dark}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 15,
  },
});

export default Logo;
