import React from 'react';
import { View, Text,Image } from 'react-native';
import Partner from "./../../compont/partner/App"
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={{flex:1}}>
       {/* header coding start */}
    <View style={{flex:0.8,}}>
   <Text style={{ fontSize:20, fontWeight:"900", marginLeft:20,marginTop:70}}>Your partner</Text>
    </View> 
    
     {/* header coding end */}
     {/* body coding start */}
     <View style={{flex:4 ,marginLeft:20 }}>

<Partner titile="Alanlove" sourse={require("./../../assate/partner1.png")} para='Tavel bolgger' sourse2={require("./../../assate/errow-right.png")}/>
<Partner titile="Charlotte" sourse={require('./../../assate/partner2.png')} para='Chief travel Eeperiencer' sourse2={require("./../../assate/errow-right.png")} />
<Partner titile="Evangiline" sourse={require('./../../assate/partner3.png')}  para='Chief travel Eeperiencer' sourse2={require("./../../assate/errow-right.png")}/>
<Partner titile="Geraldine" sourse={require('./../../assate/partner4.png')} para='Privete tour guide' sourse2={require("./../../assate/errow-right.png")}/>
<Partner titile="Prudence" sourse={require('./../../assate/partner5.png')} para='Tavel youtub master' sourse2={require("./../../assate/errow-right.png")}/>
    </View> 
     {/* body coding end */} 
       {/* bottom coding start */}
     <View style={{ marginLeft:20,}}>
<Image
source={require('./../../assate/login-logo.png')}
/>
  <Text style={{color:'blue', marginLeft:7,fontSize:20 ,fontWeight:'700'}}>Logo</Text>
</View>
    <View style={{backgroundColor:'lightgray',borderRadius:10,flexDirection:'row',flex:0.7 , marginTop:40}}>
    <View style={{marginTop:20,marginLeft:40,}}>
   <Entypo name="home" size={34} color="gray"  />
    <Text style={{fontWeight:'bold',color:'gray'}}>Home</Text>
    </View>
    <View style={{marginTop:20,marginLeft:40,}}>
    <MaterialIcons name="wallet-travel" size={34} color="gray" />
    <Text style={{fontWeight:'bold',color:'gray'}}>wallet</Text>
    </View>
    <View style={{marginTop:20,marginLeft:40,}}>
    <Entypo name="compass" size={34} color="gray" />
    <Text style={{fontWeight:'bold',color:'gray'}}>Guide</Text>
    </View>
    <View style={{marginTop:20,marginLeft:40,}}>
    <MaterialIcons name="addchart" size={34} color="blue" />
        <Text style={{fontWeight:'bold',color:'blue'}}>Chart</Text>
    </View>   
     </View> 
     {/* bottom coding end */}
    </View>
  );
}

export default App;







    
