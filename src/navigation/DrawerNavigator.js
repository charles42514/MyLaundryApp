// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
// ... other imports

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      {/* Add other screens as needed */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
