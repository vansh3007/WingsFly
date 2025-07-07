import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomDrawer = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.drawer}>
          <DrawerOption
            icon="brain"
            label="Habit"
            description="Activity that repeats over time it has detailed tracking and statistics."
          />
          <DrawerOption
            icon="repeat"
            label="Recurring Task"
            description="Activity that repeats over time it has detailed tracking and statistics."
          />
          <DrawerOption
            icon="check"
            label="Task"
            description="Single instance activity without tracking over time."
          />
          <DrawerOption
            icon="target"
            label="Goal of the Day"
            description="A specific target set for oneself to achieve within a single day."
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const DrawerOption = ({
  icon,
  label,
  description,
}: {
  icon: string;
  label: string;
  description: string;
}) => (
  <Pressable style={styles.option}>
    <View style={styles.iconCircle}>
      <Icon name={icon} size={20} color="#4B63DD" />
    </View>
    <View style={styles.labelBox}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <Icon name="chevron-right" size={22} color="#555" />
  </Pressable>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  drawer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  iconCircle: {
    backgroundColor: '#F3F3F3',
    borderRadius: 24,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  labelBox: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#777',
  },
});

export default BottomDrawer;
