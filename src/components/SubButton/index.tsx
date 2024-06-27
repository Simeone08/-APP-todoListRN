import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


export function SubButton ({onPress}){
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        width: '75%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: '#0000FF',
        borderRadius: 4,
    },
    text: {
        color: '#fff',
        fontSize: 32,
    }
});