import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Hero from './src/components/Hero';
import About from './src/components/About';

const App = () => {
  return (
    <ScrollView style={styles.mainBodyBackground}>
      <Hero />
      <View>
        <About />
      </View>
    </ScrollView >
  );
};

export default App;

const styles = StyleSheet.create({
  mainBodyBackground: {
    backgroundColor: '#090909',
    height: '100%',
    width: '100%',
  },
});
