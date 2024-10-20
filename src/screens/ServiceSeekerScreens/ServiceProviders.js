import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert, TextInput, ScrollView } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import axios from 'axios'; // Import Axios

const ServiceProviders = () => {
  const [selectedServices, setSelectedServices] = useState({});
  const [clothesCount, setClothesCount] = useState({});
  
  const handleCallPress = async (phoneNumber, providerId) => {
    // Check if services and clothes count are specified
    if (!selectedServices[providerId] || !clothesCount[providerId]) {
      Alert.alert("Error", "Please select services and specify the number of clothes.");
      return;
    }

    // Prepare order data
    const orderData = {
      providerId,
      serviceSeekerId: 'sampleSeekerId', // Placeholder for now
      serviceSeekerAddress: 'sampleSeekerAddress', // Placeholder
      selectedServices: selectedServices[providerId],
      numberOfClothes: clothesCount[providerId],
    };

    try {
      // Send order data to the backend using Axios
      const response = await axios.post('http://localhost:3000/api/place-order', orderData);

      // Check the response from the server
      if (response.status === 201) {
        Alert.alert("Success", response.data.message);
        // Optionally, you can navigate to a confirmation screen here
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while placing the order");
      console.error('Error:', error);
    }

    // Open the dialer
    Linking.openURL(`tel:${phoneNumber}`).catch((err) => 
      Alert.alert("Failed to make a call", err.message)
    );
  };

  const toggleServiceSelection = (providerId, service) => {
    setSelectedServices((prev) => {
      const currentServices = prev[providerId] || [];
      if (currentServices.includes(service)) {
        return { ...prev, [providerId]: currentServices.filter((s) => s !== service) };
      } else {
        return { ...prev, [providerId]: [...currentServices, service] };
      }
    });
  };

  const handleClothesCountChange = (providerId, count) => {
    setClothesCount((prev) => ({
      ...prev,
      [providerId]: count,
    }));
  };

  const providers = [
    {
      id: '1',
      businessName: 'Laundry Experts',
      location: '123 Main St, City A',
      services: [
        { name: 'Washing', rate: '₦500/piece' },
        { name: 'Ironing', rate: '₦300/piece' },
        { name: 'Starching', rate: '₦200/piece' },
      ],
      phoneNumber: '1234567890',
    },
    {
      id: '2',
      businessName: 'Fresh Clothes Co.',
      location: '456 Elm St, City B',
      services: [
        { name: 'Washing', rate: '₦400/piece' },
        { name: 'Ironing', rate: '₦250/piece' },
      ],
      phoneNumber: '0987654321',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {providers.map((provider) => (
        <Card key={provider.id} containerStyle={styles.card}>
          <Card.Title>{provider.businessName}</Card.Title>
          <Card.Divider />
          <Text>Location: {provider.location}</Text>

          {/* Service Checkboxes with Rates */}
          {provider.services.map((service, index) => (
            <View key={index} style={styles.serviceContainer}>
              <CheckBox
                title={`${service.name} (${service.rate})`}
                checked={selectedServices[provider.id]?.includes(service.name)}
                onPress={() => toggleServiceSelection(provider.id, service.name)}
              />
            </View>
          ))}

          {/* Input field for number of clothes */}
          <TextInput
            style={styles.input}
            placeholder="Number of clothes"
            keyboardType="numeric"
            onChangeText={(text) => handleClothesCountChange(provider.id, text)}
            value={clothesCount[provider.id] || ''}
          />

          {/* Call to Order Button */}
          <Button
            title="Call to Order"
            onPress={() => handleCallPress(provider.phoneNumber, provider.id)}
          />
        </Card>
      ))}
    </ScrollView>
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
    marginBottom: 10, // Add margin for better spacing between cards
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default ServiceProviders;
