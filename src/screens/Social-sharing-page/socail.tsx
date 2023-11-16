import React from 'react';
import { View,  Image,Text,StyleSheet,} from 'react-native';
import SocialLink from'./../../compont/socialLink/App'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* header coding start */}
      <View style={{  flex:1 ,marginLeft:10 ,marginTop:30}}>
      <View style={{flex:1}}>
      <Image
style={{width:30,height:30, marginTop:50 }}
source={require("./../../assate/lifit-errow.png")}/>
      </View>
      <View style={{flex:2 ,marginTop:30}}>
   
      <View style={{ flex:1 ,alignContent:'center',justifyContent:'flex-start'}}>
<View style={{flexDirection:'row'}}>
<View style={{marginRight:30,marginLeft:10,width:20}}>
<Image
style={{width:30,height:30,}}
source={require("./../../assate/prson.png")}/>
</View>
<View>
<Text style={{fontSize:26, fontWeight:'800', marginBottom:2}}>Your social link</Text>

</View>
</View>
</View>
<View style={{ marginTop:5, marginLeft:10,flex:2 }}>
<Text  style={{fontSize:20, fontWeight:'700',color:'gray', }}>
   Here you can post your travel and promot e your travel videos
</Text>
      </View>
      </View>
</View>
       {/* header coding end */}

        {/* Links coding start */}
      <View style={{flex:2 }}>
<View style={{flex:2.2}}>
<SocialLink 
title="sociallink1"
source={require('./../../assate/facebook.png')}
text="Facebook"
para="Limted time paid  promotion"

/>
</View>
<View style={{flex:2.2}}>
<SocialLink
title="sociallink2"
source={require('./../../assate/twitter.png')}
text="Twitter"
para="Limted time paid  promotion"


/>
</View>
<View style={{flex:2.2}}>
<SocialLink
title="sociallink3"
source={require('./../../assate/instagram.png')}
text="Instagram"
para="Promote your bolg for free"

/>
</View>
<View style={{flex:2.3}}>
<SocialLink
title="sociallink4"
source={require('./../../assate/pinterest.png')}
text="Pinterest"
para="Promote your bolg for free"

/>
</View>

</View>
 {/* links coding end */}
    </View>
  );
}

export default App;