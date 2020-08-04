import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Switch,
  View,
  Image,
} from 'react-native';
import colors from '../config/colors';

const Logo = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 200, height: 40}}
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
    backgroundColor: colors.black,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 20,
  },
  logo: {
    fontSize: 23,
    color: colors.primary,
    fontFamily: 'Courier',
  },
  nestedLogo: {
    color: '#892c27',
  },
});

export default Logo;
