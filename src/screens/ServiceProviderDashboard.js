// src/screens/ServiceProviderDashboard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiceProviderDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Provider Dashboard</Text>
      {/* Add your service provider-specific content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ServiceProviderDashboard;
