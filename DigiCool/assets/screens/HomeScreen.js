import { HStack } from "native-base";
import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";

function HomeScreen({ navigation }) {
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>What would you like to do today?</Text>

        <HStack style={{ justifyContent: "center" }}>
          <CardComponent
            onPress={() => navigation.navigate("Tutorials")}
            width={Dimensions.get("window").width * 0.35}
          >
            <Image
              style={styles.cardimage}
              source={require("../images/tutorial.png")}
            />
            <Text style={styles.cardtext}>New Tutorials</Text>
          </CardComponent>
          <CardComponent onPress={() => {}}>
            <Image
              style={styles.cardimage}
              source={require("../images/test.png")}
            />
            <Text style={styles.cardtext}>Test / Challenges</Text>
          </CardComponent>
        </HStack>
        <HStack style={{ justifyContent: "center" }}>
          <CardComponent onPress={() => {}}>
            <Image
              style={styles.cardimage}
              source={require("../images/practice.jpg")}
            />
            <Text style={styles.cardtext}>Practice Previous Tutorials</Text>
          </CardComponent>
          <CardComponent onPress={() => {}}>
            <Image
              style={styles.cardimage}
              source={require("../images/award.jpg")}
            />
            <Text style={styles.cardtext}>Check Reward Points</Text>
          </CardComponent>
        </HStack>
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

export default HomeScreen;
