// src/screens/AdminDashboard.js

import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AdminDashboard = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <View style={styles.iconContainer}>
          <Icon name="person" size={24} color="#3f51b5" onPress={() => navigation.navigate('AdminProfile')} />
        </View>
      </View>

      <Card containerStyle={styles.card}>
        <Card.Title>Manage Users</Card.Title>
        <Card.Divider />
        <Button
          title="View Users"
          onPress={() => navigation.navigate('ViewUsers')}
        />
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Service Requests</Card.Title>
        <Card.Divider />
        <Button
          title="View Requests"
          onPress={() => navigation.navigate('ViewRequests')}
        />
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Analytics</Card.Title>
        <Card.Divider />
        <Button
          title="View Analytics"
          onPress={() => navigation.navigate('Analytics')}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    marginBottom: 20,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default AdminDashboard;
