import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TaskItem = ({
  image,
  title,
  time,
  timeColor,
  tags,
  status,
}: {
  image: any;
  title: string;
  time: string;
  timeColor: string;
  tags: string[];
  status: 'done' | 'pending' | 'upcoming';
}) => {
  const [mainTag, subTag] = tags;

  const renderStatusIcon = () => {
    if (status === 'done') {
      return (
        <View style={[styles.statusCircle, { backgroundColor: '#4CAF50' }]}>
          <Icon name="check" size={14} color="#fff" />
        </View>
      );
    } else {
      return (
        <View style={styles.statusCircleOutline}>
          <Icon
            name={status === 'pending' ? 'clock-outline' : 'chevron-right'}
            size={14}
            color="black"
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imageBox}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.metaRow}>
          {/* Time pill */}
          <View
            style={[styles.timePill, { backgroundColor: `${timeColor}20` }]}
          >
            <Icon name="clock-outline" size={13} color={timeColor} />
            <Text style={[styles.timeText, { color: timeColor }]}>{time}</Text>
          </View>

          {/* Tags */}
          <View style={styles.tagRow}>
            <Text style={styles.tagText}>
              {mainTag}
              {subTag ? ` | ${subTag}` : ''}
            </Text>
            <Icon name="flag-outline" size={13} color="#999999" />
          </View>
        </View>
      </View>

      {/* Status Icon */}
      {renderStatusIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  imageBox: {
    borderRadius: 50,
    padding: 6,
    width: 50,
    height: 50,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  timePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  timeText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '600',
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#999999',
    marginRight: 4,
  },
  statusCircle: {
    width: 25,
    height: 25,
    borderRadius: 22,
    backgroundColor: '#6C6C6C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusCircleOutline: {
    width: 30,
    height: 30,
    borderRadius: 22,
    borderWidth: 1.5,
    backgroundColor: '#E7E7E7',
    borderColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskItem;
