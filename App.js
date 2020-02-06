import React, {Component} from 'react';
import {StyleSheet, ImageBackground } from 'react-native'
//COMPONENTES
import Body from './src/main/body'
import Header from './src/main/header'

class App extends Component {
  
  render(){

    return(

      <ImageBackground source={require('./assets/fondos.jpg')} style={styles.container}>

        <Header />

        <Body />
      
       </ImageBackground>
     
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column'
  }
  });

export default App