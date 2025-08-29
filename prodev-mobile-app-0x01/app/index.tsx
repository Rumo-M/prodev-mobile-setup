import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Additional Text Components */}
      <View style={styles.textGroup}>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>

      {/* Entry Screen Text */}
      <Text style={styles.entryText}>Entry Screen - Awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textGroup: {
    alignItems: 'center',
    marginBottom: 16,
  },
  entryText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mediumText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '400',
  },
});
