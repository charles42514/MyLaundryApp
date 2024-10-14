import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const Notifications = () => {
  // Default notifications array
  const notifications = [
    { id: '1', message: 'New order placed by John Doe', time: '2 hours ago' },
    { id: '2', message: 'Your order for Jane Doe is completed', time: '1 day ago' },
    { id: '3', message: 'Order for Mark Smith is running late', time: '3 days ago' },
  ];

  const renderNotification = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    padding: 15,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default Notifications;
