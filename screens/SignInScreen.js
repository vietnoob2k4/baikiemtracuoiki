import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng FontAwesome hoặc thay đổi thành thư viện icon mong muốn

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Xử lý logic đăng nhập
    // Xử lý logic đăng nhập
  };

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground
        source={require('../assets/601 1.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Mask Group */}
        <View style={styles.maskGroup}>
          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Title */}
            <Text style={styles.titleup}>Get your groceries</Text>
            <Text style={styles.titleup}>with Nectar</Text>
            <View style={styles.phoneInputContainer}>
              <View style={styles.phoneFlag}>
                <Text style={styles.phoneFlagText}>🇻🇳   +84</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                
                keyboardType="phone-pad"
              />
            </View>
            <Text style={styles.title}>Or connect with social media</Text>
            
            {/* Social Media Buttons */}
            <TouchableOpacity style={styles.googleButton}>
              <Icon name="google" size={24} color="#FCFCFC" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>   Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookButton}>
              <Icon name="facebook" size={24} color="#FCFCFC" style={styles.buttonIcon} />
              <Icon name="facebook" size={24} color="#FCFCFC" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            
            {/* Phone Number Input */}
            
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
    position: 'absolute',
  },
  mainContent: {
    flex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  title: {
    color: '#828282',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 20,
    marginBottom: 20,
  },
  facebookButton: {
    width: 320,
    height: 50,
    backgroundColor: '#4A66AC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  googleButton: {
    width: 320,
    height: 50,
    backgroundColor: '#5383EC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#FCFCFC',
    textAlign: 'center',
    marginLeft: 10,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10, // Giảm khoảng cách phần kẻ dưới
    paddingHorizontal: 20,
    borderBottomWidth: 0.5, // Điều chỉnh độ dày của kẻ dưới
    borderBottomColor: '#CCCCCC',
    width: '90%'
  },
  phoneFlag: {
     
    padding: 5,
    borderRadius: 5,
    marginRight: 10,

  },
  phoneFlagText: {
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  titleup:{
    fontSize:20,
    alignSelf: 'flex-start',
    marginLeft:40,
    fontWeight: '600',
    marginBottom:1,
  }
});

export default SignInScreen;

