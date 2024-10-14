// src/screens/ServiceProviderScreens/OrderManagement.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements';

const OrderManagement = () => {
  // Placeholder order data with more service seeker details
  const [orders, setOrders] = useState([
    { id: '1', customer: 'John Doe', date: '2024-10-01', status: 'In Progress', service: 'Laundry', phone: '123-456-7890', address: '123 Main St, City, USA' },
    { id: '2', customer: 'Jane Smith', date: '2024-09-28', status: 'Completed', service: 'Dry Cleaning', phone: '987-654-3210', address: '456 Maple St, Town, USA' },
    { id: '3', customer: 'Mike Johnson', date: '2024-09-30', status: 'Pending', service: 'Laundry', phone: '555-123-4567', address: '789 Oak St, Village, USA' },
  ]);

  // Function to handle order status change
  const changeOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order => order.id === id ? { ...order, status: newStatus } : order);
    setOrders(updatedOrders);
  };

  // Render each order in the list
  const renderOrder = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderTitle}>{item.customer} - {item.service}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      <Text>Status: {item.status}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Address: {item.address}</Text>
      <View style={styles.actions}>
        {item.status !== 'Completed' && (
          <Button
            title="Mark as Completed"
            onPress={() => changeOrderStatus(item.id, 'Completed')}
            buttonStyle={styles.button}
          />
        )}
        {item.status !== 'Canceled' && (
          <Button
            title="Cancel Order"
            onPress={() => changeOrderStatus(item.id, 'Canceled')}
            buttonStyle={styles.cancelButton}
          />
        )}
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Management</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#777',
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  cancelButton: {
    backgroundColor: '#FF5722',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});

export default OrderManagement;
