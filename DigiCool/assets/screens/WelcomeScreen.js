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
    <View>
      <HeaderComponent style={{ width: "100%" }} />
      <ImageBackground
        source={require("../images/scroll.png")}
        // style={styles.image}
        style={{
          width: Dimensions.get("window").width,
          height: "80%",
          marginTop: 10,
          paddingLeft: 30,
          //   backgroundColor: "#555",
          resizeMode: "contain",
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
            // backgroundColor: "#000",
          }}
        >
          <Text style={{ fontSize: 40, margin: 75, fontWeight: "bold" }}>
            Age is just a number, Keep up the good work.
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginRight: 30 }}>
        <TouchableHighlight
          underlayColor="#021626"
          title="User"
          style={({ marginRight: 15 }, styles.button)}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <AntDesign name="rightcircleo" color="white" size={50} />
        </TouchableHighlight>
      </View>
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
