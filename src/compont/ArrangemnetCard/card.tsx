import React from 'react';
import { View, Text,Image } from 'react-native';

const card = (props) => {
  return (
    <View style={{backgroundColor:'lightgray', alignItems:'center' ,justifyContent:'center',width:120,borderRadius:20}}>
      <View style={{ marginTop:15 ,}}>
        <Image
        source={props.source}
        />
      </View>
      <View style={{marginTop:15}}>
        <Text style={{fontSize:20,fontWeight:"700"}}>{props.titile}</Text>
      </View>
      <View style={{marginTop:15 ,}}>
    <Text style={{color:'gray'}}>
{props.time}
    </Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15,marginBottom:15}}>
        <View style={{marginRight:10}}>
        <Image
        source={require("./../../assate/Hotels.png")}
        />
        </View>
        <View>
            <Text style={{fontSize:15,fontWeight:'bold', color:'blue'}}>First Class</Text>
        </View>

      </View>
    </View>
  );
}

export default card;
