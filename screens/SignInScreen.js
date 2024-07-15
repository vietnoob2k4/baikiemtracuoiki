import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng FontAwesome hoặc thay đổi thành thư viện icon mong muốn

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Xử lý logic đăng nhập
  };

  return (
    <View style={styles.container}>
      {/* Background */}
      <ImageBackground
        source={require('../assets/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg')}
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
              <Icon name="facebook" size={24} color="#FCFCFC" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.googleButton}>
              <Icon name="google" size={24} color="#FCFCFC" style={styles.buttonIcon} />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50, // Có thể điều chỉnh khoảng cách tùy ý
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
    flexDirection: 'row', // Đảm bảo icon và text nằm cùng hàng
  },
  googleButton: {
    width: 364,
    height: 67,
    backgroundColor: '#5383EC',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row', // Đảm bảo icon và text nằm cùng hàng
  },
  buttonText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 18,
    color: '#FCFCFC',
    textAlign: 'center',
    marginLeft: 10, // Khoảng cách giữa icon và text
  },
  additionalText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
  },
  buttonIcon: {
    marginRight: 10, // Khoảng cách giữa icon và text
  },
});

export default SignInScreen;
