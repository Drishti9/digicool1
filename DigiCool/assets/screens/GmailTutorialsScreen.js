import { HStack } from "native-base";
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

function GmailTutorialsScreen({ navigation, route }) {
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <NavigationHeader title={route.name} navigation={navigation} />
      <View
        styles={{
          width: Dimensions.get("window").width,
          elevation: 10,
          backgroungColor: "#333",
        }}
      >
        <Text style={styles.title}>Choose a Tutorial</Text>
      </View>
      <ScrollView style={{ height: 500 }}>
        <CardComponent
          onPress={() => {
            navigation.navigate("WhatIsScreen");
          }}
        >
          <Image
            style={styles.cardimage}
            source={require("../images/gmail.png")}
          />

          <Text style={styles.text}>What is Gmail?</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.description}
          >
            With Gmail, your email is stored safely in the cloud. You can get to
            messages from any computer or device with a web browser. If your
            administrator allows, you can join or start a video meeting in
            Google Meet right from Gmail. Add Google Chat to your Gmail inbox
            and get all the features of Chat directly in Gmail. You can also
            quickly organize and find important email, as well as read and draft
            email without an internet connection.
          </Text>
        </CardComponent>

        {/* <HStack>
          <CardComponent>
            <Text style={styles.text}>1.</Text>
          </CardComponent>
          <CardComponent onPress={() => {}}>
            <Text style={styles.text}>See new email(Inbox)</Text>
          </CardComponent>
        </HStack> */}

        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>See new email(Inbox)</Text>
        </CardComponent>
        <CardComponent onPress={() => navigation.navigate("Gmail Index")}>
          <Text style={styles.text}>Compose a New Email</Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>Reply to email</Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>Save and print attachments</Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>Forward an Email</Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>Search your Inbox</Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>Forward an Email</Text>
        </CardComponent>
      </ScrollView>
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
    marginTop: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
    marginVertical: 20,
    alignSelf: "center",
  },
});

export default GmailTutorialsScreen;
