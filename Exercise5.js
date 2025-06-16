import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/789.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topRow: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  bottomRow: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  blackContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    marginRight: 20,
    marginLeft: 10,
  },
  yellowContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
  },
});
