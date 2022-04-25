import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Button,
  ImageBackground,
  Text,
  TouchableHighlight,
} from "react-native";
import { AntDesign, Ionicons } from "react-native-vector-icons";
import HeaderComponent from "../components/HeaderComponent";

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ width: "100%", backgroundColor: "#fff" }}>
      <HeaderComponent style={{ width: "100%" }} navigation={navigation} />

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image source={require("../images/DigiCool.png")} />

        <ImageBackground
          source={require("../images/scroll.png")}
          // style={styles.image}
          style={{
            width: Dimensions.get("window").width,
            height: "75%",
            paddingLeft: 30,
            // backgroundColor: "#555",
            resizeMode: "contain",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 130,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                margin: 4,
                fontWeight: "bold",
                marginBottom: 50,
                marginHorizontal: 90,
              }}
            >
              Age is just a number, Keep up the good work.
            </Text>
          </View>

          <View style={{ marginRight: 30, marginTop: 390 }}>
            <TouchableHighlight
              underlayColor="#021626"
              title="User"
              style={({ marginRight: 15 }, styles.button)}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <AntDesign name="rightcircleo" color="white" size={50} />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
      {/* <View style={{ marginRight: 30 }}>
        <TouchableHighlight
          underlayColor="#021626"
          title="User"
          style={({ marginRight: 15 }, styles.button)}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <AntDesign name="rightcircleo" color="white" size={50} />
        </TouchableHighlight>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    // height: "100%",
    // resizeMode: "contain",
    marginTop: 20,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 65,
    margin: 10,

    backgroundColor: "#06477d",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf: "flex-end",
    // marginLeft: 50,
  },
});

export default WelcomeScreen;
