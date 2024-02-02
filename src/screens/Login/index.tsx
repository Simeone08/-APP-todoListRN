import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { LogInput } from '../../components/LogInput';
import { SubButton } from '../../components/SubButton';
import { AuthButton } from '../../components/AuthButton';


export default function Login() {
  return (
    <View style={styles.container}>

        <View style={styles.logoView}>
            <Text>LOGO</Text>
        </View>

        <LogInput />

        <SubButton />

        <AuthButton />
    </View>
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