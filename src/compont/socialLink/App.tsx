import React from 'react';
import { View, Text ,Image} from 'react-native';

const App = (props) => {
  return (
    <View style={{  flexDirection:'row', alignContent:'flex-start',justifyContent:'flex-start',backgroundColor:"lightgray", borderColor:'black', marginTop:20, marginLeft:10, padding:20, borderRadius:10 ,}}>
      <View style={{marginRight:10}}>
      <Image
style={{width:30,height:30,}}
source={props.source}/>
      </View>
      <View>
        <Text style={{fontSize:20, fontWeight:'700'}}>{props.text}</Text>
        <Text style={{ fontWeight:'700' ,color:'gray'}} >{props.para}</Text>
      </View>
    </View>
  );
}

export default App;
