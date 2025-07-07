import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingActionButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="plus" size={28} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#151B73',
    width: 56,
    height: 56,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});

export default FloatingActionButton;
