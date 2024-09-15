import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import RadioButton from '../components/RadioButton'; // Import the custom RadioButton component

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null); // State to manage selected role

  const handleSignUp = () => {
    // Handle sign-up logic here
    if (role === 'provider') {
      navigation.navigate('AdminDashboard');
    } else if (role === 'seeker') {
      navigation.navigate('UserDashboard');
    } else {
      alert('Please select a role.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.radioContainer}>
        <RadioButton 
          label="Service Provider"
          value="provider"
          selectedValue={role}
          onValueChange={setRole}
        />
        <RadioButton 
          label="Service Seeker"
          value="seeker"
          selectedValue={role}
          onValueChange={setRole}
        />
      </View>
      <Button title="Sign Up" onPress={handleSignUp} style={styles.signUpButton} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  radioContainer: {
    marginVertical: 20,
  },
  signUpButton: {
    marginTop: 20,
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: '#007bff',
    textAlign: 'center',
  },
});

export default SignUp;
