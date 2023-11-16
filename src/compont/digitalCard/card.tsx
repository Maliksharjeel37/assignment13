import React from 'react';
import { View, Text,Image, } from 'react-native';

const App = (props) => {
  return (
    <View style={{ flexDirection:'row', marginTop:20}}>
     <View style={{flex:1}}>
     <Image
      source= {props.sourse}
      />
     </View>
   <View style={{flex:2}}>
   <View>
   <Text >
      {props.titile}
  
     </Text>
     <View style={{alignContent:'center',justifyContent:'center', }}>
      <Text style={{color:'gray' }}>{props.para}</Text>
   </View>
   </View>
  
   </View>
   <View style={{ marginRight:10 ,}}>
<Image
style={{overlayColor:'black'}}
source= {props.sourse2}

/>
   </View>     
    </View>
  );
}

export default App;
