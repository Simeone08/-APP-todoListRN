import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function AuthButton (){
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <FontAwesome6 
                    name='google'
                    size={40}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Entypo
                    name='app-store'
                    size={40}
                />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height: 80,
        width: '40%',
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.94,

        elevation: 13,
    },
});