import React from 'react';
import { View, Text,Image,TextInput } from 'react-native';

const Input = () => {
  return (
    <View style={{marginTop:30}}>
    <View style={{ marginLeft:20, marginTop:5,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
<Image
 style={{marginLeft:20,width:20, marginTop:2}}
source={require('./../../assate/email.png')}
/>
<TextInput 
style={{marginLeft:30}}
placeholder=' Enter your Email @'/>
</View>
    </View>
  );
}

export default Input;
