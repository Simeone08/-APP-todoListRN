import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export function LogInput (){
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="email"
            />
            <TextInput
                style={styles.input} 
                placeholder="senha"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{},
    input:{
        height: 40,
        width: 180,
        marginTop: 20,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 4,
    },
});