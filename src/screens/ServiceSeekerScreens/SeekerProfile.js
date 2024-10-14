import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SeekerProfile = ({ 
  navigation, 
  route = {} 
}) => {
  const { 
    name = 'John Doe', 
    email = 'john.doe@example.com', 
    phone = '123-456-7890', 
    address = '123 Main St, Anytown, USA' 
  } = route.params || {}; // Default values

  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedAddress, setUpdatedAddress] = useState(address);

  const handleLogout = () => {
    // Handle logout logic
    navigation.navigate('Home'); // Redirect to Home or Login
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{updatedName}</Text>
        <Text style={styles.role}>Service Seeker</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={toggleEdit}>
            <Icon name={editing ? 'check' : 'edit'} size={24} color="#3f51b5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" size={24} color="#3f51b5" />
          </TouchableOpacity>
        </View>
      </View>
      
      <Card containerStyle={styles.card}>
        <Card.Title>Profile Information</Card.Title>
        <Card.Divider />
        {editing ? (
          <>
            <Input
              label="Name"
              value={updatedName}
              onChangeText={setUpdatedName}
              containerStyle={styles.input}
            />
            <Input
              label="Email"
              value={updatedEmail}
              onChangeText={setUpdatedEmail}
              containerStyle={styles.input}
            />
            <Input
              label="Phone"
              value={updatedPhone}
              onChangeText={setUpdatedPhone}
              containerStyle={styles.input}
            />
            <Input
              label="Address"
              value={updatedAddress}
              onChangeText={setUpdatedAddress}
              containerStyle={styles.input}
            />
          </>
        ) : (
          <>
            <Text style={styles.info}>Email: {updatedEmail}</Text>
            <Text style={styles.info}>Phone: {updatedPhone}</Text>
            <Text style={styles.info}>Address: {updatedAddress}</Text>
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
  container: {
    flex: 1,
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
  info: {
    fontSize: 16,
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

export default SeekerProfile;
