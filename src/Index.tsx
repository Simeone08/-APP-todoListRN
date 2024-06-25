import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import Login from './screens/Login';
import { Home } from './screens/Home';


export default function Main() {
  return (
      <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    borderColor: '#000',
    borderWidth: 1,
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 200,
  },
});