import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Alert, Button} from 'react-native';
import { render } from 'react-dom';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      uri : require("./src/images/dice1.png")
      ,uri1 : require("./src/images/dice1.png")
    }
  }
  Getrandom = () => {
    return Math.floor((Math.random() * 6) + 1)
  }
  But = () => {
    var x =  this.Getrandom();
    var y= this.Getrandom();
    switch (x) {
      case 1: this.setState({uri:require("./src/images/dice1.png")});
      break;
      case 2: this.setState({uri:require("./src/images/dice2.png")});
      break;
      case 3: this.setState({uri:require("./src/images/dice3.png")});
      break;
      case 4: this.setState({uri:require("./src/images/dice4.png")});
      break;
      case 5: this.setState({uri:require("./src/images/dice5.png")});
      break;
      case 6: this.setState({uri:require("./src/images/dice6.png")});
      break;

      default: this.setState({uri:require("./src/images/dice1.png")});
      break;

    }
    switch (y) {
      case 1: this.setState({uri1:require("./src/images/dice1.png")});
      break;
      case 2: this.setState({uri1:require("./src/images/dice2.png")});
      break;
      case 3: this.setState({uri1:require("./src/images/dice3.png")});
      break;
      case 4: this.setState({uri1:require("./src/images/dice4.png")});
      break;
      case 5: this.setState({uri1:require("./src/images/dice5.png")});
      break;
      case 6: this.setState({uri1:require("./src/images/dice6.png")});
      break;

      default: this.setState({uri1:require("./src/images/dice1.png")});
      break;

    }
    
  }

  render(){
  return (
    <View style={styles.container}>
      <Image source={this.state.uri} style={{ height:200,width:200 ,marginTop:100}}></Image>
      <Image source={this.state.uri1} style={{ height:200,width:200}}></Image>

      <StatusBar style="auto" />
  
    <TouchableOpacity style={styles.play} onPress = {this.But}>
      <Text  >
      Play Button 
      </Text>
      </TouchableOpacity>
 
  </View>
   );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5BCBA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  play:{
    marginTop:35,
    fontSize:20,
    color: 'white',
    fontWeight:'bold',
    borderWidth: 2,
    paddingHorizontal:40,
    paddingVertical:8,
    borderRadius:5,

  

  }
});
