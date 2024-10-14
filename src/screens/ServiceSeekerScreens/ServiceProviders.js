import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native';
import { Card } from 'react-native-elements';

const ServiceProviders = () => {
  const handleCallPress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`).catch((err) => 
      Alert.alert("Failed to make a call", err.message)
    );
  };

  const providers = [
    {
      businessName: 'Laundry Experts',
      services: 'Washing, Ironing, Starching',
      rate: '₦500/kg',
      availableDays: 'Mon-Fri',
      phoneNumber: '1234567890',
    },
    {
      businessName: 'Fresh Clothes Co.',
      services: 'Washing, Ironing',
      rate: '₦400/kg',
      availableDays: 'Mon-Sat',
      phoneNumber: '0987654321',
    },
  ];

  return (
    <View style={styles.container}>
      {providers.map((provider, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Card.Title>{provider.businessName}</Card.Title>
          <Card.Divider />
          <Text>Services: {provider.services}</Text>
          <Text>Rate: {provider.rate}</Text>
          <Text>Available Days: {provider.availableDays}</Text>
          <Button
            title="Call to Order"
            onPress={() => handleCallPress(provider.phoneNumber)}
          />
        </Card>
      ))}
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
    elevation: 3,
    padding: 10,
  },
});

export default ServiceProviders;
