import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={require('../assets/4e8f13cbdb37604e351d37d72a1eb837.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Image
          source={require('../assets/carrot-vegetable-icon.png')} // Thay đổi đường dẫn tới biểu tượng cà rốt của bạn
          style={styles.icon}
        />
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.storeText}>to our store</Text>
        <Text style={styles.description}>
          Get your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200, // Adjust this value to move everything down
  },
  icon: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    marginBottom: 10,
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: 35,
    lineHeight: 40,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  storeText: {
    fontWeight: '600',
    fontSize: 35,
    lineHeight: 40,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    lineHeight: 14, // Adjust line height as needed
    color: 'rgba(252, 252, 252, 0.7)',
    textAlign: 'center',
    marginTop: 13,
  },
  getStartedButton: {
    width: 280,
    height: 50,
    backgroundColor: '#53B175',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#FFF9FF',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
