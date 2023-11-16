import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,} from "react-native";
import MainButton from "./../../compont/MainButton/Button";

const App = () => {
  return (
    <ImageBackground
      source={require("./../../assate/bgimage-1.png")}
      style={style.cantainer}
    >
      {/* header start */}
      <View style={{ flex: 1.3, marginTop: 90, marginLeft: 20 }}>
        <Image
          source={require("./../../assate/lift-errowcolor-white.png")}
          style={{ width: 35 }}
        />
      </View>
      {/* header end */}
      {/* body start */}
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View>
            <Text
              style={{
                marginLeft: 30,
                fontSize: 35,
                fontWeight: "300",
                color: "white",
              }}
            >
              Nordic Cottage
            </Text>
            <Text
              style={{
                marginLeft: 30,
                fontSize: 15,
                fontWeight: "bold",
                color: "lightgray",
                marginTop: 20,
              }}
            >
              Blue Lagoon Drive from Reykjavik the capital of lceland , to the
              southeast for about an houryou can reach blue Lagoon, famous
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
            <View>
              <Image source={require("./../../assate/star.png")} />
            </View>
            <View>
              <Image source={require("./../../assate/star.png")} />
            </View>
            <View>
              <Image source={require("./../../assate/star.png")} />
            </View>
            <View>
              <Image source={require("./../../assate/star.png")} />
            </View>
            <View>
              <Image source={require("./../../assate/star.png")} />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "900" }}>4.79</Text>
            </View>
            <View>
              <Text style={{ color: "lightgray" }}>(70 reviews)</Text>
            </View>
            <View style={{ marginLeft: 50 }}>
              <Text style={{ color: "lightgray" }}>See reviews</Text>
            </View>
          </View>
          {/* Button coding start */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <View style={{ marginRight: 70 }}>
              <MainButton
                style={{
                  alignItems: "center",
                  backgroundColor: "black",
                  padding: 15,
                  borderRadius: 40,
                }}
                titile="Enter the plan "
                styletext={{ color: "white" }}
              />
            </View>
            <View>
              <MainButton
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: 15,
                  borderRadius: 40,
                }}
                titile="Enter the plan "
                styletext={{ color: "black" }}
              />
            </View>
          </View>
          {/* Button coding start */}
        </View>
      </View>
      {/* body end */}
    </ImageBackground>
  );
};

export default App;
const style = StyleSheet.create({
  cantainer: {
    flex: 1,
    backgroundColor: "red",
    width: 360,
    height: 710,
  },
});
