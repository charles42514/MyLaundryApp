import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import RadioButton from '../../components/RadioButton'; // Import the custom RadioButton component

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('seeker'); // Default to 'seeker' role
  const [serviceRates, setServiceRates] = useState({ washing: '', ironing: '', starching: '' });

  // Available days (Sunday to Saturday)
  const [availableDays, setAvailableDays] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  const toggleDay = (day) => {
    setAvailableDays({ ...availableDays, [day]: !availableDays[day] });
  };

  const handleSignUp = () => {
    // Navigate to the appropriate drawer based on the selected role
    if (role === 'provider') {
      navigation.navigate('ProviderDrawer', { screen: 'ProviderProfile' });
    } else {
      navigation.navigate('SeekerDrawer', { screen: 'SeekerProfile' });
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>

          {role === 'seeker' && (
            <>
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
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
              />
            </>
          )}

          {role === 'provider' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Business Name"
                value={businessName}
                onChangeText={setBusinessName}
              />
              <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
              />

              {/* Available Days */}
              <Text style={styles.serviceTitle}>Available Days</Text>
              {Object.keys(availableDays).map((day) => (
                <View key={day} style={styles.checkboxContainer}>
                  <Switch
                    value={availableDays[day]}
                    onValueChange={() => toggleDay(day)}
                  />
                  <Text>{day}</Text>
                </View>
              ))}

              {/* Services Offered */}
              <Text style={styles.serviceTitle}>Services Offered</Text>
              <View>
                {['washing', 'ironing', 'starching'].map((service) => (
                  <View key={service} style={styles.serviceContainer}>
                    <Text>{service.charAt(0).toUpperCase() + service.slice(1)}</Text>
                    <TextInput
                      style={styles.rateInput}
                      placeholder="Rate/kg (₦)"
                      value={serviceRates[service]}
                      onChangeText={(value) => setServiceRates({ ...serviceRates, [service]: value })}
                    />
                  </View>
                ))}
              </View>
            </>
          )}

          {/* Role selection below the forms */}
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
      </ScrollView>
    </View>
  );
};

// Define the styles here
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  serviceTitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  rateInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    flex: 1,
    paddingHorizontal: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  signUpButton: {
    marginTop: 20,
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: 'blue',
  },
});

export default SignUp;
