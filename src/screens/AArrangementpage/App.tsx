import React from 'react';
import { View, Text,StyleSheet ,Image,ImageBackground ,Button} from 'react-native';
import ArrangCard from "./../../compont/ArrangemnetCard/card"
import MainButton from './../../compont/MainButton/Button'
const App = () => {
  return (
    <View style={{flex:1,}}>
  {/* header  start*/}
  <View style={{flex:1, }}>
    <View style={{flexDirection:'row', marginTop:80,alignContent:'center', marginLeft:10}}>
<View style={{marginTop:10}}>
<Image
source={require("./../../assate/lifit-errow.png")}
/>
</View>
<View>
    <Text style={{marginLeft:60,fontSize:40}}>
    Travel plan
    </Text>
</View>
    </View>
   </View>
   {/* header end */}

  {/* page socand part start*/}
  <View style={{flex:1.5,}}>
<View style={{marginLeft:10 ,marginBottom:7,}}>
    <Text style={{fontSize:20,fontWeight:'900'}}>Hotel</Text>
</View>
<View>
<ImageBackground source={require("./../../assate/Arrangement-bg.png")} resizeMode="cover" style={{marginLeft:10,marginRight:10,}}  >
<View>
<Text style={{color:'white',marginTop:30 ,marginLeft:8}}>Nordic Cottage </Text>
    </View>
    <View style={{flexDirection:'row', marginTop:3 ,marginBottom:20 ,marginLeft:8}}>
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
        
        </View>      
    </ImageBackground>
</View>
</View>
  {/* page socand part end*/}



{/*  page third part start */}
<View style={{flex:2.5,}}>
<View>
    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10, marginBottom:5}}>
        Flights
    </Text>
</View>
<View style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
<View style={{marginRight:20,}}>
   <ArrangCard  source={require("./../../assate/chin-flight.png")} titile='CHN' time= '21.03.6:00 AM'/>
   </View>
   <View style={{marginRight:20}}  >
  <Image
  source={require('./../../assate/errow-right.png')} />

   </View>
   <View style={{ marginRight:10}}>
   <ArrangCard source={require("./../../assate/amari-fligh.png")} titile='UK' time= '21.03.18:00 AM'/>
   </View>
</View>
</View>
{/*  page third part start */}



{/*  page four part start */}
<View style={{flex:2.5,}}>
<View>
    <Text style={{fontSize:20,fontWeight:'bold', marginLeft:10}}>
        Flights
    </Text>
</View>
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', marginTop:20}}>
       <View>
       <Text>
            Hotel(5high)...............................................................
        </Text>
       </View>
       <View>
        <Text style={{color:'blue'}}>
            $886
        </Text>
    </View>
    </View>
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center' ,marginTop:20}}>
       <View>
       <Text>
            Hotel(5high)...............................................................
        </Text>
       </View>
       <View>
        <Text style={{color:'blue'}}>
            $886
        </Text>
    </View>
    </View>
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center' ,marginTop:20}}>
       <View>
       <Text>
            Hotel(5high)...............................................................
        </Text>
       </View>
       <View>
        <Text style={{color:'blue'}}>
            $886
        </Text>
    </View>
    </View>
   <View style={{marginTop:30,marginLeft:10,marginRight:10, }}>
  <MainButton  style={{ alignItems: 'center',backgroundColor: 'blue', padding: 10,borderRadius:40}} titile="Determine the plan" styletext={{color:'white'}}/>
   </View>
</View>

{/*  page four part start */}
    </View>
  );
}

export default App;

