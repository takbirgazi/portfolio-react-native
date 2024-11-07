import { StyleSheet, View } from 'react-native'
import React from 'react'
import Hero from './src/components/Hero';

const App = () => {
  return (
    <View style={styles.mainBodyBackground}>
      <Hero />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainBodyBackground: {
    backgroundColor: "#090909",
    height: "100%",
    width: "100%",
  }
})