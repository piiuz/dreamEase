import { useRouter } from "expo-router";
import React, {useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createUserWithDeviceID } from './firebase/authService';

export default function Page() {
  useEffect(() => {
    const initializeUser = async () => {
      try {
        const userId = await createUserWithDeviceID();
        console.log('User initialized with ID:', userId);
      } catch (error) {
        console.error('Failed to initialize user:', error);
      }
    };

    initializeUser();
  }, []);
  // Use the useRouter hook to get access to the router
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image 
          source={require('../assets/images/img_image_6.png')}
          style={styles.personImage}
        />
      </View>

      <Text style={styles.title}>
        Cùng cải thiện <Text style={styles.highlightedText}>Giấc Ngủ!</Text>
      </Text>

      <Text style={styles.subtitle}>
        Hãy ngủ thật ngon giấc để lấy lại năng lượng, sức khoẻ cùng với một tinh thần sáng khoái!
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.replace("/(tabs)")} // Correctly navigate using router
      >
        <Text style={styles.buttonText}>Let’s Get Started! 😴</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0c2b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  personImage: {
    width: 250,
    height: 350,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlightedText: {
    color: '#9370DB',
  },
  subtitle: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#5C2D91',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
