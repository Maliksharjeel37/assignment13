import React from 'react';
import { View, Text,StyleSheet, ImageBackground,Image,Button } from 'react-native';
import MainButton from "./../../compont/MainButton/Button"
import DigitalCard from "../../compont/digitalCard/card"
const App = () => {
  return (
   <ImageBackground source={require('./../../assate/bgimage-1.png')} style={style.container}>
{/* header coding start */}
<View style={{flex:1}}>
   {/*errow coding start  */}
   <View style={{flex:2, marginTop:70 ,marginLeft:20,}}>
  <Image source={require('./../../assate/lift-errowcolor-white.png')} style={{marginTop:20, width:40,}}/>
  </View> 
     {/*errow coding end */}
 {/* part1 coding start */}
 <View style={{flex:1}}>
 <Text style={{color:'white' ,alignItems:'center',justifyContent:'center', fontSize:40 ,fontWeight:'bold',marginLeft:30}}>
    Nordic Cottage
  </Text>
 </View>
  {/* part1 coding start */}
</View>
{/* header coding end */}



{/* body coding start */}

<View style={{flex:1, backgroundColor:'white' , borderTopEndRadius:40,borderTopStartRadius:40}}>
{/* body part1 coding start */}
<View style={{flex:1}}>
 <View>
<Text style={{ marginLeft:30, marginTop:20,fontSize:20 , fontWeight:'bold'}}>
  About Bail
</Text>
<Text style={{marginLeft:30, marginTop:3,fontSize:15, fontWeight:'bold', color:'gray'}}>
  Blue Lagoon Drive from Reykjavik  the capital of lceland , to the southeast for about  an houryou  can reach blue Lagoon, famous
</Text>
  </View>
  <View style={{flexDirection:'row', marginLeft:5, marginTop:5,}}>
    <View>
      <Image  
      source={require("./../../assate/star.png")}
      />
    </View>
    <View>
      <Image  
      source={require("./../../assate/star.png")}
      />
    </View>
    <View>
      <Image  
      source={require("./../../assate/star.png")}
      />
    </View>
    <View>
      <Image  
      source={require("./../../assate/star.png")}
      />
    </View>
    <View>
      <Image  
      source={require("./../../assate/star.png")}
      />
    </View>
    <View style={{marginLeft:20,}}>
      <Text style={{fontWeight:'900'}}>
        4.79
      </Text>
    </View>
    <View>
      <Text style={{color:'gray'}}>
      (70 reviews)
      </Text>
    </View>
    <View style={{marginLeft:70}}>
      <Text style={{color:'gray'}}>
        See reviews
      </Text>
    </View>
  </View>
  
 </View>
 {/* body part1 coding end */}
 {/* body part2 coding start */}
 <View style={{flex:2, marginLeft:20, marginTop:25}}>

<Text style={{fontWeight:'bold'}}>
  Pricing
</Text>
<View>
  <DigitalCard titile='Flights'sourse={require("./../../assate/Flights.png")} para='from $199' sourse2={require("./../../assate/errow-right.png")}/>
</View>
<View>
  <DigitalCard titile='Hotels'sourse={require("./../../assate/Hotels.png")} para='flsfrom $199/night' sourse2={require("./../../assate/errow-right.png")}/>
</View>
{/* body part2 coding start */}



{/* button coding start */}
<View style={{marginTop:20}}>
<MainButton style={{ alignItems: 'center',backgroundColor: 'blue', padding: 15,borderRadius:40 ,marginRight:40}} titile="plan Trip " styletext={{color:'white'}}/>

</View>
{/* button coding end */}
 </View>
  <View>
  </View>
</View>
{/* body coding end */}
   </ImageBackground>

  );
}

export default App;
const style = StyleSheet.create ({
  container:{
    flex:1, backgroundColor:'red',
    width:370,
    height:715
  }
})
