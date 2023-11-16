import React from 'react';
import { View, Text ,Image} from 'react-native';

const card = (props) => {
  return (
    <View>
      <View style ={{ flexDirection:'row', borderWidth:1, borderRadius:20 ,marginRight:2 ,padding:10,backgroundColor:'lightgray'}} >
        <View >
            <Text>
           {props.titile} 
            </Text>
        </View>
        <View style ={{marginLeft:120}}>
            <Image
             source={props. source}/>
        </View>
      </View>
    </View>
  );
}

export default card;
