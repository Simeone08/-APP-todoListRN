import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function SubButton (){
    return(
        <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        borderColor: '#000',
        borderWidth: 1,
        width: '100%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    }
});