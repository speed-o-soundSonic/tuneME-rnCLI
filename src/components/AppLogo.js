import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, Switch, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const Logo = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);
  console.log(isEnabled);
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <MaterialCommunityIcons
          name="music-accidental-flat"
          size={35}
          color={colors.logo}
        />
        <Text style={styles.logo}>
          tune<Text style={styles.nestedLogo}>ME</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 23,
    color: colors.primary,
    fontFamily: 'Courier',
  },
  nestedLogo: {
    color: colors.white,
  },
});

export default Logo;
