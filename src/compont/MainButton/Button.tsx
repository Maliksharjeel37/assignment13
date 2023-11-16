import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity ,Image} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity  style={props.style} >
      <Image source={props.source}
      style={props.imgStyle}
      />
    <Text style={props.styletext} >{props.titile}</Text>
  </TouchableOpacity>
  );
}

export default Button;
const styles = StyleSheet.create({
  
    button: {
     
    },
    text:{
  
    }
   
  });
