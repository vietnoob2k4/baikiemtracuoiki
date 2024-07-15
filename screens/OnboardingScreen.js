import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigation logic to move to SignIn screen
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground
        
        style={styles.background}
        resizeMode="cover"
      >
        {/* Dark Overlay */}
        <View style={styles.overlay} />

        {/* Content */}
        <View style={styles.content}>
          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Welcome to our store</Text>

          {/* Description */}
          <Text style={styles.description}>
            Get your groceries in as fast as one hour
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(14, 23, 39, 0.8)', // Adjust opacity and color as needed
  },
  content: {
    position: 'absolute',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 48,
    lineHeight: 58,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 300, // Adjust as needed
  },
  description: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    lineHeight: 20,
    color: 'rgba(252, 252, 252, 0.7)',
    textAlign: 'center',
    marginTop: 20, // Adjust as needed
  },
  getStartedButton: {
    width: 353,
    height: 67,
    backgroundColor: '#53B175',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust as needed
  },
  buttonText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 18,
    color: '#FFF9FF',
    textAlign: 'center',
  },
});

export default OnboardingScreen;