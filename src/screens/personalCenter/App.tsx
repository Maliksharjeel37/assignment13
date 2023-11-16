import React from 'react';
import { View, Text,Image ,TextInput} from 'react-native';
import MainButton from "./../../compont/MainButton/Button"
const App = () => {
  return (
    <View style={{flex:1}}>
    {/* header start */}
      <View style={{flex:1}}>
      <Image
source={require('./../../assate/lifit-errow.png')}
style={{marginTop:70,marginLeft:30, width:30}}
/>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:20,marginTop:10, flex:4}}>Alan love  </Text>
       <View>
<Image
source={require('./../../assate/partner3.png')}

/>
</View>
      </View>
          {/* header start */}

      <View style={{flex:3}}>
            {/* input1 start */}

      <View>
    <Text style={{marginLeft:35 ,color:'gray',}}>
         E- mail address
   </Text>
    </View>
    <View style={{marginTop:15, marginLeft:20,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
    <Image
 style={{marginLeft:20,width:20, marginTop:2}}
source={require('./../../assate/email.png')}
/>
<TextInput 
style={{marginLeft:30}}
placeholder=' Enter your Email @ '/>
</View>
      {/* input1 end */}


            {/* input2 start */}


<View>
<Text style={{marginLeft:35, marginBottom:5 ,color:'gray'}}>
     Password
 </Text>
</View>
     <View style={{ marginLeft:20, marginTop:5,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
<View style={{flex:0.1}}>
<Image
 style={{marginLeft:20,width:20, marginTop:2}}
source={require('./../../assate/password-img.png')}
/>
</View>
<View style={{flex:1,}}>
<TextInput 
style={{marginLeft:30}}
placeholder=' Enter your Email @ '/>
</View>
<View style={{flex:0.5}}>
<MainButton style={{ alignItems: 'center',backgroundColor: 'blue', padding: 10,borderRadius:40}} titile="Change" styletext={{color:'white'}}/>
</View>
    </View>


          {/* input2 end */}



      {/* input3 start */}


<View>
  <View>
  <Text style={{marginLeft:35, marginBottom:5 , marginTop:5,color:'gray'}}>
   Authenticate
</Text>
 <View style={{ marginLeft:20, marginTop:5,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
<Image
 style={{marginLeft:20,width:20, marginTop:2}}
source={require('./../../assate/Authenticate.png')}
/>
<TextInput 
style={{marginLeft:30}}
placeholder=' Enter your Authenticate '/>
</View>
  </View>
</View>
      {/* input3 end */}



      </View>

      <View style={{flex:1,justifyContent:'center'}}>
<MainButton titile='Save Settings' styletext={{color:'white'}} style={{ alignItems: 'center',backgroundColor: 'blue',padding: 15,borderRadius:40, marginLeft:10,marginRight:10}}
/>
</View>
      </View>

  );
}

export default App;
