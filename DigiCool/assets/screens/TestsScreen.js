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
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";
import NavigationHeader from "../components/NavigationHeader";

function TestsScreen({ navigation, route }) {
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <NavigationHeader title={route.name} navigation={navigation} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Choose a Test</Text>

        <ScrollView style={{ height: 530 }}>
          <Text style={{ fontSize: 22, marginLeft: 10 }}>Gmail:</Text>

          <CardComponent onPress={() => {}}>
            <Text style={styles.text}>Test: See new email(Inbox)</Text>
          </CardComponent>
          <CardComponent onPress={() => navigation.navigate("Gmail Index")}>
            <Text style={styles.text}>Test: Compose a New Email</Text>
          </CardComponent>
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
  text: {
    width: Dimensions.get("window").width * 0.9,
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
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

export default TestsScreen;
