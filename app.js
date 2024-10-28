import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Splash screen rendering
  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        {/* Using ./Frame.png as the logo */}
        <Image
          source={require('./Frame.png')} // Ensure Frame.png is placed in the correct path
          style={styles.logo}
        />
        <Text style={styles.splashText}>Money Tracker</Text>
      </View>
    );
  }

  // Main content after splash screen
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Welcome to the App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26C281', // Green background for splash screen
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain', // Keep the logo aspect ratio
  },
  splashText: {
    marginTop: 20, // Space between the logo and text
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color after splash
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;