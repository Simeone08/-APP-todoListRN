import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export function AuthButton (){
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <Text>Gg</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>IOS</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '100%',
        height: 100,
        marginTop: 60,
        borderColor: '#000',
        borderWidth: 1,
    },
    button:{
        borderColor: '#000',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
    },
});