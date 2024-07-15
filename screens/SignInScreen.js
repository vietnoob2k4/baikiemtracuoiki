import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Logic to handle sign in action
  };

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground
        
        style={styles.background}
        resizeMode="cover"
      >
        {/* Mask Group */}
        <View style={styles.maskGroup}>
          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Title */}
            <Text style={styles.title}>Get your groceries with nectar</Text>
            
            {/* Social Media Buttons */}
            <TouchableOpacity style={styles.facebookButton}>
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Additional Text */}
            <Text style={styles.additionalText}>Or connect with social media</Text>
          </View>
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
  maskGroup: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(196, 196, 196, 0.6)',
    position: 'absolute',
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 29,
    color: '#030303',
    marginBottom: 30,
  },
  facebookButton: {
    width: 364,
    height: 67,
    backgroundColor: '#4A66AC',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButton: {
    width: 364,
    height: 67,
    backgroundColor: '#5383EC',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 18,
    color: '#FCFCFC',
    textAlign: 'center',
  },
  additionalText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
  },
});

export default SignInScreen;