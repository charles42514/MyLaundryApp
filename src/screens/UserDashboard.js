import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Profile Icon */}
      <View style={styles.header}>
        <Text style={styles.headerText}>User Dashboard</Text>
        <Icon
          name="person"
          size={30}
          color="#000"
          style={styles.profileIcon}
          onPress={() => navigation.navigate('Profile')} // Assuming 'Profile' is a separate screen
        />
      </View>

      <ScrollView style={styles.content}>
        {/* Recent Orders */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Orders</Text>
          <Text style={styles.cardContent}>You don't have any recent orders.</Text>
        </View>

        {/* Available Services */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Available Services</Text>
          <Text style={styles.cardContent}>Explore the services available to you.</Text>
        </View>

        {/* Ongoing Services */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ongoing Services</Text>
          <Text style={styles.cardContent}>No services are currently in progress.</Text>
        </View>

        {/* Chat Box */}
        <View style={styles.chatBox}>
          <Text style={styles.cardTitle}>Chat with Service Provider</Text>
          <Text style={styles.cardContent}>Start a conversation...</Text>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 14,
    color: '#333',
  },
  chatBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default UserDashboard;
