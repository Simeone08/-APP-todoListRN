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
    container:{
        marginTop: 420,
    },
    input:{
        height: 40,
        width: 180,
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: 10,
    },
});