import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const Notification = () => {
  // Default notification data
  const notifications = [
    {
      id: '1',
      message: 'Your order #1234 has been completed!',
      time: '2 hours ago',
    },
    {
      id: '2',
      message: 'Your order #1235 is running and will be delivered soon.',
      time: '1 day ago',
    },
    {
      id: '3',
      message: 'A new service provider is now available in your area!',
      time: '3 days ago',
    },
  ];

  // Function to render each notification as a card
  const renderNotificationItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default Notification;
