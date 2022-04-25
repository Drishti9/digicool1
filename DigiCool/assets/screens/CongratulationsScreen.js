import { Heading, HStack } from "native-base";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import { Entypo } from "react-native-vector-icons";
import { StackActions, NavigationActions } from "@react-navigation/native";

function CongratulationsScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: Dimensions.get("window").height,
      }}
    >
      <HeaderComponent navigation={navigation} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: Dimensions.get("window").width,
          }}
          source={require("../images/trophy.webp")}
        />

        <Text
          style={{
            fontSize: 40,
            alignSelf: "center",
            margin: 20,
            fontWeight: "bold",
          }}
        >
          Congratulations!
        </Text>

        <Text
          style={{
            fontSize: 28,
            color: "#872f1b",
          }}
        >
          You have successfully completed the Tutorial!
        </Text>
        {/* <Text style={{ fontSize: 25, margin: 20, color: "#0a8ba8" }}>
          Time to test yourself now
        </Text> */}

        <HStack style={{ marginVertical: 30, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#06477d",
              height: 65,
              width: 65,
              borderRadius: 65,
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 20,
            }}
            onPress={() => {
              navigation.dispatch(StackActions.popToTop());
            }}
          >
            <Entypo name="home" color="white" size={30} />
          </TouchableOpacity>

          <Text>OR</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#61dafb",
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 100,
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 35 }}>Start Test</Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CongratulationsScreen;
