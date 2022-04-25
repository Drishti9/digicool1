import { HStack } from "native-base";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";
import NavigationHeader from "../components/NavigationHeader";

function TutorialsScreen({ navigation, route }) {
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <NavigationHeader title={route.name} navigation={navigation} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Choose an App</Text>

        <ScrollView style={{ height: 530 }}>
          <HStack style={{ justifyContent: "center" }}>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/whatsapp.png")}
              />
              <Text style={styles.cardtext}>WhatsApp</Text>
            </CardComponent>
            <CardComponent onPress={() => navigation.navigate("Gmail")}>
              <Image
                style={styles.cardimage}
                source={require("../images/gmail.png")}
              />
              <Text style={styles.cardtext}>Gmail</Text>
            </CardComponent>
          </HStack>
          <HStack style={{ justifyContent: "center" }}>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/netbanking.png")}
              />
              <Text style={styles.cardtext}>Net Banking</Text>
            </CardComponent>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/youtube.png")}
              />
              <Text style={styles.cardtext}>Youtube</Text>
            </CardComponent>
          </HStack>
          <HStack style={{ justifyContent: "center" }}>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/gmeet.png")}
              />
              <Text style={styles.cardtext}>Meet</Text>
            </CardComponent>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/gpay.png")}
              />
              <Text style={styles.cardtext}>Google Pay</Text>
            </CardComponent>
          </HStack>
          <HStack style={{ justifyContent: "center" }}>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/zoom.png")}
              />
              <Text style={styles.cardtext}>Zoom</Text>
            </CardComponent>
            <CardComponent onPress={() => {}}>
              <Image
                style={styles.cardimage}
                source={require("../images/keepnotes.png")}
              />
              <Text style={styles.cardtext}>Keep Notes</Text>
            </CardComponent>
          </HStack>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginVertical: 20,
  },
  cardimage: {
    width: Dimensions.get("window").width * 0.4,
    height: 150,
    resizeMode: "contain",
    alignContent: "center",
  },
  cardtext: {
    width: Dimensions.get("window").width * 0.35,
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default TutorialsScreen;
