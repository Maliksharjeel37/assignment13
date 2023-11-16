import React from 'react';
import { View, Text ,Image} from 'react-native';

const card = (props) => {
  return (
    <View>
      <View style ={{ flexDirection:'row', borderWidth:1, borderRadius:20 ,padding:10,alignItems:'center',justifyContent:'center',backgroundColor:'lightgray'}} >
        <View style ={{marginLeft:5}}>
            <Image
            source={require('./../../assate/clock.png')}/>
        </View>
        <View style ={{marginLeft:4}}>
            <Text>
            {props.time}
            </Text>
        </View>
      </View>
    </View>
  );
}

export default card;
