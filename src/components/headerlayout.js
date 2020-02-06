import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'

function HeaderLayout(){

    saludo = () => { Alert.alert('Bienvenido a APP!')}


    return(

       <View style={styles.header}>

        <View style={styles.headerLeft}>

          <Image source={require('../../assets/logo.png')} style={styles.image1}></Image>
        </View>


        <View style={styles.headerRight}>

         <TouchableOpacity style={styles.colorb} onPress={this.saludo}>

          <Text style={styles.colort}>Sign In</Text>
        
         </TouchableOpacity>
        </View>

       </View>
    )
}

const styles = StyleSheet.create({

    header : {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 25
  },
  headerLeft : {
  flex : 0.5
  },
  image1 : {
    width : 100,
    height : 100,
    borderRadius : 50,
    resizeMode : 'contain'
  },
  headerRight : {
    flex: 0.5,
    marginTop: 25,
    alignItems: 'flex-end',
    marginEnd: 15
    
  },
  colorb : {
    backgroundColor: 'yellow',
    alignItems: 'center',
    width: 100,
    height: 45,
  },
  colort : {
    color: 'black',
    marginTop: 10
  },
})

export default HeaderLayout