import  TravelArrangmentCard  from "./../../compont/TravelArragmentCrad/card"
import  TravelArrangmentCard2 from "./../../compont/TravelArrangementCard2/card2"
import MainButton from "./../../compont/MainButton/Button"
import { View, Text,Image } from 'react-native';

const App = () => {


  return (
    <View style={{flex:1,}}>
      {/* header start */}
<View style={{flex:1}}>
<View style={{flexDirection:'row', marginTop:80,alignContent:'center', marginLeft:10}}>
<View style={{marginTop:10}}>
<Image
source={require("./../../assate/lifit-errow.png")}
/>
</View>
<View>
    <Text style={{marginLeft:30,fontSize:40}}>
    Add itinerary
    </Text>
</View>
    </View>
</View>
      {/* header end */}


      
  {/* page body part start*/}
  <View style={{flex:2}}>
  <View style={{flexDirection:'row',}}>
    <View >
<Text style={{fontSize:20, fontWeight:'bold', marginLeft:30,marginBottom:3}}>
    Day 1
</Text>
<Text style={{fontSize:15, fontWeight:'bold', marginLeft:35, color:'gray',marginBottom:7}}>
    July 14
</Text>
    </View>
    <View >
<Text style={{fontSize:20, fontWeight:'bold', marginLeft:60,marginBottom:3}}>
    Day 2
</Text>
<Text style={{fontSize:15, fontWeight:'bold', marginLeft:55, color:'gray',marginBottom:7}}>
    July 15
</Text>
    </View>
    <View >
<Text style={{fontSize:20, fontWeight:'bold', marginLeft:60,marginBottom:3}}>
    Day 3
</Text>
<Text style={{fontSize:15, fontWeight:'bold', marginLeft:55, color:'gray',marginBottom:7}}>
    July 16 
</Text>
    </View>
  </View>
  <View style={{flex:0.8 , flexDirection:'row'}}>
    <View style = {{flex:0.7}}>
    <TravelArrangmentCard time='3:50'/>
    </View>
    <View style = {{flex:2, marginLeft:10}}>
      <TravelArrangmentCard2 titile=" Wake UP  " source={require('./../../assate/sun.png')}/>  
    </View>
</View>
<View style={{flex:0.8, flexDirection:'row'}}>
    <View style = {{flex:0.7}}>
    <TravelArrangmentCard time='6:50'/>
    </View>
    <View style = {{flex:2, marginLeft:10}}>
      <TravelArrangmentCard2 titile=" City tour   " source={require('./../../assate/car-img.png')}/>  
    </View>
</View>
<View style={{flex:0.8 , flexDirection:'row'}}>
    <View style = {{flex:0.7}}>
    <TravelArrangmentCard time='7:50'/>
    </View>
    <View style = {{flex:2, marginLeft:10}}>
      <TravelArrangmentCard2 titile=" Sailing project  " source={require('./../../assate/sailing-img.png')}/>  
    </View>
</View>
<View style={{flex:0.8, flexDirection:'row'}}>
    <View style = {{flex:0.7}}>
    <TravelArrangmentCard time='8:50'/>
    </View>
    <View style = {{flex:2, marginLeft:10}}>
      <TravelArrangmentCard2 titile=" Skydliving  " source={require('./../../assate/sky-img.png')}/>  
    </View>
</View>
<View style={{flex:2}}>
<MainButton  style={{ alignItems: 'center',backgroundColor: 'lightblue', padding: 20,borderRadius:40,margin:10,marginRight:10}} titile="Add Activity" styletext={{color:'white'}}/>

</View>
  </View>
  {/* page body  part end*/}

    
        {/*page bottom start*/}

    <View style={{flex:1}}>
<MainButton  style={{ alignItems: 'center',backgroundColor: 'blue', padding: 20,borderRadius:40,margin:10,marginRight:10}} titile="Next Stap" styletext={{color:'white'}}/>
</View>
    {/*page bottom end*/}


   



    </View>
  );
}

export default App;
