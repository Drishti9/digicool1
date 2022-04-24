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

function GmailTutorialsScreen(props) {
  return (
    <View>
      <ScrollView>
        <CardComponent onPress={() => {}}>
          <Text style={styles.title}>Gmail</Text>
          <Image
            style={styles.cardimage}
            source={require("../images/gmail.png")}
          />
          <Text style={styles.description}>
            With Gmail, your email is stored safely in the cloud. You can get to
            messages from any computer or device with a web browser. If your
            administrator allows, you can join or start a video meeting in
            Google Meet right from Gmail. Add Google Chat to your Gmail inbox
            and get all the features of Chat directly in Gmail. You can also
            quickly organize and find important email, as well as read and draft
            email without an internet connection.
          </Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
          <Text style={styles.text}>See new email(Inbox)</Text>
        </CardComponent>
        <CardComponent onPress={() => {}}>
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  title: {},
});

export default GmailTutorialsScreen;
