import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const Orders = () => {
  // Default order data
  const orders = [
    {
      id: '1',
      serviceProvider: 'Laundry Experts',
      serviceRequested: 'Washing and Ironing',
      status: 'Completed',
    },
    {
      id: '2',
      serviceProvider: 'Fresh Clothes Co.',
      serviceRequested: 'Starching',
      status: 'Running',
    },
    {
      id: '3',
      serviceProvider: 'Quick Clean',
      serviceRequested: 'Washing',
      status: 'Order Placed',
    },
  ];

  // Function to render each order as a card
  const renderOrderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Card.Title>Order #{item.id}</Card.Title>
      <Card.Divider />
      <Text style={styles.orderInfo}>Service Provider: {item.serviceProvider}</Text>
      <Text style={styles.orderInfo}>Service Requested: {item.serviceRequested}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
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
  orderInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#3f51b5',
  },
});

export default Orders;
