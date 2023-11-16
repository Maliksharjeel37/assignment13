

import {Image ,Text, View } from 'react-native';

export default function Stap() {
  return (
    <View style = {{ justifyContent:'center',alignItems:'center',flex:1}}>
      {/* img top coding start */}
      <View style = {{ justifyContent:'center',alignItems:'center',flex:1,marginTop:90}}>
        <Image
        style={{width:300, height:300}}
        source={require('./../../../src/assate/stap-1.png')}
/>
    </View>
    {/* img top coding end */}



    {/* body coding start */}
    <View style = {{ justifyContent:'center',alignItems:'center', marginTop:20, flex:1}}>
      <Text style={{fontSize:30, fontWeight:'700', }}>Make your own privatetraval plan </Text>
      <Text style={{fontSize:20, fontWeight:'700',color:'gray', marginTop:0,marginBottom:10}}>Formulate your strategy to receive wonderful gift packs</Text>
      <View style={{flex:2}}>
      <Image
              style={{width:70,height:70, backgroundColor:'blue' , marginTop:20, borderRadius:60}}
      source={require('./../../../src/assate/button-errow.png')}
      />
    </View>
    <View style = {{marginTop: 30, justifyContent:'center',alignItems:'center', display:"flex", flexDirection:'row', marginBottom:20}}>
    
<Image
        style={{width:20, height:20}}
source={require("./../../../src/assate/Zaps-1.png")}
/>
<Text >Nordic Vactin Sponor</Text>
</View>
    </View>
    
{/* body coding end */}
    </View>
  );
}