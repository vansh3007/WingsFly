import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

const dateData = [
  { day: 'Sun', date: 15 },
  { day: 'Mon', date: 16 },
  { day: 'Tue', date: 17 },
  { day: 'Wed', date: 18 },
  { day: 'Thu', date: 19 },
  { day: 'Fri', date: 20 },
  { day: 'Sat', date: 21 },
];

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(18);

  return (
    <FlatList
      data={dateData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.date.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        const isSelected = item.date === selectedDate;

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setSelectedDate(item.date)}
            style={[
              styles.dateButton,
              isSelected ? styles.selectedButton : styles.unselectedButton,
            ]}
          >
            <Text
              style={[styles.dayText, isSelected && styles.selectedDayText]}
            >
              {item.day}
            </Text>

            <View
              style={[
                styles.dateCircle,
                isSelected
                  ? styles.selectedDateCircle
                  : styles.unselectedDateCircle,
              ]}
            >
              <Text
                style={[styles.dateText, isSelected && styles.selectedDateText]}
              >
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor:"white",
  },
  dateButton: {
    alignItems: 'center',
    marginHorizontal: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
    width: 60,
    borderRadius: 20,
  },
  selectedButton: {
    backgroundColor: '#2C3399',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  unselectedButton: {
    backgroundColor: '#E9E9E9',
  },
  dayText: {
    fontSize: 12,
    color: '#B0B0B0',
    marginBottom: 4,
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  dateCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 4,
    width: 57,
    height: 35,
  },
  unselectedDateCircle: {
    backgroundColor: '#D5D5D5',
  },
  selectedDateCircle: {
    backgroundColor: '#151B73',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A3A3A',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
});

export default DateSelector;
