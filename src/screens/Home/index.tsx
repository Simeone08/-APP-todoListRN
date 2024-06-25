import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>

        <View style={styles.titleContainer}>

            <TextInput 
                style={styles.input}
            />
            <TouchableOpacity 
                style={styles.button}
            >
                <Ionicons 
                    name='add-circle-sharp'
                    size={32}
                    color= '#778899'
                />
            </TouchableOpacity>
        </View>

        {/* lista de tasks */}
        <View>

        </View>

    </View>
  );
}