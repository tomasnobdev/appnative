import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity } from 'react-native'

class App extends Component {

  saludo = () => { Alert.alert('Bienvenido a APP!')}

  render(){

    return(

      <ImageBackground source={require('./assets/fondos.jpg')} style={styles.container}>
        <View style={styles.header}>

        <View style={styles.headerLeft}>
          <Image source={require('./assets/logo.png')} style={styles.image1}></Image>
        </View>

        <View style={styles.headerRight}>
         <TouchableOpacity style={styles.colorb} onPress={this.saludo}>
          <Text style={styles.colort}>Sign In</Text>
         </TouchableOpacity>
        </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.textb}>Bienvenido a App!</Text>
        </View>

       </ImageBackground>
     
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column'
  },
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
  body : {
    flex : 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
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
  textb : {
    fontWeight: 'bold',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 30
  }
 
});

export default App