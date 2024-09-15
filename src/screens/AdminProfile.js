// src/screens/AdminProfile.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AdminProfile = ({ navigation }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Admin Name');
  const [email, setEmail] = useState('admin@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('456 Admin Ave, Admin City, USA');

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
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>Administrator</Text>
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
              label="Name"
              value={name}
              onChangeText={setName}
              containerStyle={styles.input}
            />
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              containerStyle={styles.input}
            />
            <Input
              label="Phone"
              value={phone}
              onChangeText={setPhone}
              containerStyle={styles.input}
            />
            <Input
              label="Address"
              value={address}
              onChangeText={setAddress}
              containerStyle={styles.input}
            />
          </>
        ) : (
          <>
            <Text style={styles.info}>Email: {email}</Text>
            <Text style={styles.info}>Phone: {phone}</Text>
            <Text style={styles.info}>Address: {address}</Text>
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
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default AdminProfile;
