import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left Logo & Brand */}
      <View style={styles.leftSection}>
        
         <Image source={require('../assets/logo.png')} style={styles.logo} />
       
        <Text style={styles.brandText}>WingsFly</Text>
      </View>

      {/* Right Icons */}
      <View style={styles.iconGroup}>
        <Feather name="search" size={20} style={styles.icon} />
        <Feather name="calendar" size={20} style={styles.icon} />
        <Feather name="help-circle" size={20} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#292f70',
    padding: 8,
    borderRadius: 12,
    marginRight: 8,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#333',
    marginHorizontal: 8,
  },
  logo: {
    width: 32,
      height: 32,
    marginRight: 8,
   
  },
});

export default Header;
