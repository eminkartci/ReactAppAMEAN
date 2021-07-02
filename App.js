import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>

        <ImageBackground 
            source={require('./assets/images/background.jpg')}
            style={styles.background}
          /> 


        <View style={styles.titles}>

          <ImageBackground 
            source={require('./assets/images/AmeanLogo.png')}
            style={styles.logo}
          /> 

          

          <Text style={styles.title}>A-MEAN Danışmanlık</Text>
          <Text style={styles.subtitle}>Eğitim ve Yazılımda en iyisi!</Text>

        </View>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {    
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500'
  },
  subtitle:{
    fontSize: 16,
    color: '#5c5e62'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'relative',
    marginBottom: '5%',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
