import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import { LogInput } from '../../components/LogInput';
import { SubButton } from '../../components/SubButton';
import { AuthButton } from '../../components/AuthButton';


export default function Login() {
  return (
    <View style={styles.container}>

        <View style={styles.logoView}>
            <FontAwesome6 
              name='list-check'
              size={80}
            />
        </View>

        <LogInput />

        <SubButton />

        <AuthButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});