import React from 'react';
import { View, Text,Image } from 'react-native';
import Input from "./../../compont/Input/Input"
import MainButton from "./../../compont/MainButton/Button"

const App = () => {
  return (
    <View style={{flex:1}}>
    {/* text start */}
      <View style={{flex:1}}>
<View >
<Image
source={require('./../../assate/lifit-errow.png')}
style={{marginTop:70,marginLeft:30, width:30}}
/>
</View>
 <View>
    <Text style={{fontSize:30,fontWeight:'bold', marginLeft:20,marginTop:10}}>
    Sign Up  
</Text>
    </View>
      </View>
      {/* text end */}
  



        {/* inputs coding start */}
       <View style={{flex:3}}>
       {/* input */}
       <View>
       <Input/>
       </View>
       {/* text */}
       <View>
       <Text style={{marginTop:20 ,fontWeight:'bold',marginLeft:20}}>
       ........................ OR Continue with.........................
    </Text>
       </View>
       {/* buttons */}
       <View>
       <View style={{marginTop:50,marginLeft:5, }}>
<MainButton  style={{backgroundColor: 'black', padding: 15,borderRadius:50,width:350,flexDirection:'row',}} titile="Continue with App" styletext={{color:'white',marginLeft:120}} />
</View>
<View style={{marginTop:50,marginLeft:5, }}>
<MainButton  style={{backgroundColor: 'purple', padding: 15,borderRadius:50,width:350,flexDirection:'row',}} titile="Continue with facebook" styletext={{color:'white',marginLeft:100}}/>
</View>
       </View>
         {/* inputs coding end */}
       </View>
 {/* inputs coding end */}


 
    {/* button buttom  coding start  */}
 
    <View style={{marginLeft:5,flex:1  }}>
<MainButton  style={{ backgroundColor: 'blue', padding: 15,borderRadius:50,width:350,marginTop:120,flexDirection:'row'}} titile="Continue" styletext={{color:'white',marginLeft:120,}}/>
</View>
    </View>
  );
}

export default App;
