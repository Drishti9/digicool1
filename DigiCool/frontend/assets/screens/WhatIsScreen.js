import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";
import NavigationHeader from "../components/NavigationHeader";

function WhatIsScreen({ navigation, route }) {
  const text =
    "With Gmail, your email is stored safely in the cloud. You can get to messages from any computer or device with a web browser. If your administrator allows, you can join or start a video meeting in Google Meet right from Gmail. Add Google Chat to your Gmail inbox and get all the features of Chat directly in Gmail. You can also quickly organize and find important email, as well as read and draft email without an internet connection.";
  const text1 =
    "With Gmail, your email is stored safely in the cloud. You can get to messages from any computer or device with a web browser.";
  return (
    <View>
      <HeaderComponent navigation={navigation} text={text1} />
      <NavigationHeader title="What Is Gmail?" navigation={navigation} />
      <View
        styles={{
          width: Dimensions.get("window").width,
          elevation: 10,
          backgroungColor: "#333",
        }}
      >
        <Text style={styles.title}>Gmail</Text>
      </View>
      <View
        style={{ margin: 5, backgroundColor: "#fff", elevation: 3, padding: 5 }}
      >
        <Image
          style={styles.cardimage}
          source={require("../images/gmail.png")}
        />

        <Text ellipsizeMode="tail" style={styles.description}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardimage: {
    width: Dimensions.get("window").width * 0.4,
    height: 150,
    resizeMode: "contain",
    alignContent: "center",
    alignSelf: "center",
    position: "relative",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  description: {
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 18,
    lineHeight: 30,
    textAlign: "justify",
  },
  title: {
    fontSize: 25,
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default WhatIsScreen;
