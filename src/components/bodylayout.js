import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

function BodyLayout(){

    return(

        <View style={styles.body}>
        <Text style={styles.textb}>Bienvenido a App!</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    body : {
        flex : 1,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
},
textb : {
    fontWeight: 'bold',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 30,
}
  });

export default BodyLayout