import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import RadioButton from '../../components/RadioButton'; // Import the custom RadioButton component

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seeker'); // Default role set to 'seeker'
  
  // Validation States
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [roleError, setRoleError] = useState('');

  // Validation functions
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    if (!emailError && !passwordError && role) {
      // Proceed with login
      if (role === 'provider') {
        navigation.navigate('ProviderDrawer'); // Redirect to Provider Dashboard
      } else {
        navigation.navigate('SeekerDrawer'); // Redirect to Seeker Dashboard
      }
    } else {
      if (!role) setRoleError('Please select a role.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text); // Real-time email validation
        }}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validatePassword(text); // Real-time password validation
        }}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Role selection */}
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
      {roleError ? <Text style={styles.errorText}>{roleError}</Text> : null}

      <Button title="Login" onPress={handleLogin} style={styles.loginButton} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
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
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  radioContainer: {
    marginVertical: 20,
  },
  loginButton: {
    marginTop: 20,
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: '#007bff',
    textAlign: 'center',
  },
});

export default Login;
