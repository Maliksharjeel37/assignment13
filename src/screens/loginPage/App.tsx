import { View, Text,Image,TextInput } from 'react-native';
import MainButton from "./../../compont/MainButton/Button"
const App = () => {
  return (
    <View style={{flex:1}}>
      {/* heading start */}
      <View style={{flex:1}}>
      <Image
source={require('./../../assate/lifit-errow.png')}
style={{marginTop:70,marginLeft:30, width:30}}
/>
<Text style={{fontSize:20,fontWeight:'bold', marginLeft:20,marginTop:10}}>
Sign Up Free
</Text>
      </View>
      {/* heading end */}
      <View style={{flex:2}}>
 {/* inputs-1 coding start */}
  <View style={{ marginTop:15, marginLeft:20,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
  <Image
   style={{marginLeft:20,width:20, marginTop:2}}
  source={require('./../../assate/email.png')}
  />
  <TextInput 
  style={{marginLeft:30}}
  placeholder=' Enter your Email @ '/>
  </View>
    {/* inputs-1 coding end */}
     {/* inputs-2 coding start */} 
     <View style={{marginTop:15 }}>
    <Text style={{marginLeft:35, marginBottom:5 , marginTop:5,color:'gray'}}>
    Or Continue with
</Text>
    <View style={{ marginLeft:20, marginTop:5,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
<Image
source={require("./../../assate/password-img.png")}

/>

<TextInput 
style={{marginLeft:30}}
placeholder=' create  a passowrd '/>
</View>
    </View>
     {/* inputs-2 coding end */}
     


      {/* inputs-3 coding start */} 
    <View style={{marginTop:15}}>
    <Text style={{marginLeft:35, marginBottom:5 , marginTop:5,color:'gray'}}>
    Or Continue with
</Text>
    <View style={{ marginLeft:20, marginTop:5,flexDirection:'row',borderRadius:40, borderColor:'lightgray', borderWidth:1  ,width:320,padding:6}}>
 <Image
 style={{marginLeft:20,width:20, marginTop:2}}
source={require('./../../assate/Authenticate.png')}
/> 
<TextInput 
style={{marginLeft:30}}
placeholder=' Repact Password  '/>
</View>
<View style={{flexDirection:'row', marginLeft:20,marginTop:20}}>
<Image
 style={{marginLeft:20,width:20, marginTop:2}}
source={require('./../../assate/readicons.png')}
/>
<Text style={{marginLeft:20, fontWeight:'bold'}}>
  I have read  the 
</Text>
<Text style={{marginLeft:10 ,fontWeight:'bold',color:'blue'}}>
  Terms of service
</Text>
</View>
    </View>
</View>
  {/* inputs-3 coding end */}
  

  
      {/* button */}
      <View style={{flex:1,marginTop:60}}>
<MainButton style={{backgroundColor:'blue',padding:20,borderRadius:50,marginLeft:10,marginRight:10,marginTop:100,}} titile="Continue" styletext={{ marginLeft:120}}/>
      </View>
      {/* botton */}
    </View>
  );
}

export default App;
