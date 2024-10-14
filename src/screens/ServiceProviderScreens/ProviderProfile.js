import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Input, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProviderProfile = ({ navigation, route = {} }) => {
  const { 
    businessName = 'Provider Business Name', 
    location = '123 Business St, Provider City', 
    phone = '123-456-7890', 
    availableDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], 
    services = [
      { name: 'Washing', rate: '₦500' },
      { name: 'Ironing', rate: '₦300' },
      { name: 'Starching', rate: '₦400' }
    ] 
  } = route.params || {};

  const [editing, setEditing] = useState(false);
  const [updatedBusinessName, setUpdatedBusinessName] = useState(businessName);
  const [updatedLocation, setUpdatedLocation] = useState(location);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedAvailableDays, setUpdatedAvailableDays] = useState(availableDays);
  const [updatedServices, setUpdatedServices] = useState(services);
  const [newService, setNewService] = useState({ name: '', rate: '' });

  const toggleEdit = () => setEditing(!editing);

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  const handleAddService = () => {
    if (newService.name && newService.rate) {
      setUpdatedServices([...updatedServices, newService]);
      setNewService({ name: '', rate: '' });
    }
  };

  const handleRemoveService = (index) => {
    setUpdatedServices(updatedServices.filter((_, i) => i !== index));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{updatedBusinessName}</Text>
        <Text style={styles.role}>Service Provider</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={toggleEdit}>
            <Icon name={editing ? 'check' : 'edit'} size={24} color="#3f51b5" />
          </TouchableOpacity>
        </View>
      </View>

      <Card containerStyle={styles.card}>
        <Card.Title>Profile Information</Card.Title>
        <Card.Divider />
        {editing ? (
          <>
            <Input
              label="Business Name"
              value={updatedBusinessName}
              onChangeText={setUpdatedBusinessName}
              containerStyle={styles.input}
            />
            <Input
              label="Location"
              value={updatedLocation}
              onChangeText={setUpdatedLocation}
              containerStyle={styles.input}
            />
            <Input
              label="Phone"
              value={updatedPhone}
              onChangeText={setUpdatedPhone}
              containerStyle={styles.input}
            />

            <Text style={styles.label}>Available Days</Text>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <CheckBox
                key={day}
                title={day}
                checked={updatedAvailableDays.includes(day)}
                onPress={() => {
                  setUpdatedAvailableDays(prevDays =>
                    prevDays.includes(day)
                      ? prevDays.filter(d => d !== day)
                      : [...prevDays, day]
                  );
                }}
              />
            ))}

            <Text style={styles.label}>Services Offered</Text>
            {updatedServices.map((service, index) => (
              <View key={index} style={styles.serviceRow}>
                <Input
                  label={service.name}
                  value={service.rate}
                  onChangeText={(text) => {
                    const updated = [...updatedServices];
                    updated[index].rate = text;
                    setUpdatedServices(updated);
                  }}
                  containerStyle={styles.inputSmall}
                />
                <TouchableOpacity onPress={() => handleRemoveService(index)}>
                  <Icon name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ))}

            <Text style={styles.label}>Add New Service</Text>
            <Input
              label="Service Name"
              value={newService.name}
              onChangeText={(text) => setNewService({ ...newService, name: text })}
              containerStyle={styles.inputSmall}
            />
            <Input
              label="Service Rate"
              value={newService.rate}
              onChangeText={(text) => setNewService({ ...newService, rate: text })}
              containerStyle={styles.inputSmall}
            />
            <Button
              title="Add Service"
              onPress={handleAddService}
              disabled={!newService.name || !newService.rate} // Disable button if fields are empty
            />
          </>
        ) : (
          <>
            <Text style={styles.info}>Location: {updatedLocation}</Text>
            <Text style={styles.info}>Phone: {updatedPhone}</Text>

            <Text style={styles.label}>Available Days:</Text>
            <Text style={styles.info}>{updatedAvailableDays.join(', ')}</Text>

            <Text style={styles.label}>Services Offered:</Text>
            {updatedServices.map((service, index) => (
              <Text key={index} style={styles.info}>
                {service.name}: {service.rate}
              </Text>
            ))}
          </>
        )}

        <Button
          title={editing ? 'Save Changes' : 'Edit Profile'}
          onPress={toggleEdit}
        />
      </Card>

      <Button
        title="Logout"
        buttonStyle={styles.logoutButton}
        onPress={handleLogout}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView scrolls properly
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  inputSmall: {
    marginBottom: 10,
    width: '90%',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff4d4d',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10,
  },
});

export default ProviderProfile;
