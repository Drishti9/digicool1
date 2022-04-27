import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Picker,
  Text,
  Dimensions,
  TouchableHighlight,
  TextInput,
  Button,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import { AntDesign, Ionicons } from "react-native-vector-icons";
import { HStack, ScrollView } from "native-base";
import NavigationHeader from "../components/NavigationHeader";

function onPress(language) {}

function UserSettingsScreen({ navigation, route }) {
  const [language, setLanguage] = useState("English");
  const name = "Suryakanta Shah",
    mobileno = 1234567890;
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <NavigationHeader title={route.name} navigation={navigation} />

      <ScrollView style={{ height: 500 }}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.button}>
            <View style={styles.buttonsm}>
              <View style={styles.buttonsmsm}>
                <AntDesign name="user" color="black" size={100} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ margin: 20, marginTop: 30, alignItems: "center" }}>
          <HStack style={styles.hstack}>
            <Text style={styles.label}> Name: </Text>
            <Text style={styles.input}>{name}</Text>
          </HStack>
          <HStack style={{ alignItems: "center", marginVertical: 10 }}>
            <Text style={styles.label}>Mobile No.:</Text>
            <Text style={styles.input}>{mobileno}</Text>
          </HStack>

          <Text style={{ fontSize: 18, padding: 2, marginTop: 20 }}>
            Prefferred Language:
          </Text>

          <View style={{ alignItems: "center" }}>
            <Picker
              style={{ width: 150 }}
              selectedValue={language}
              onValueChange={(currentLanguage) => {
                setLanguage(currentLanguage);
                console.log(language, currentLanguage);
                navigation.navigate('Gmail Index',{lang:currentLanguage});
              }}
            >
              <Picker.Item label="English" value="EN" />
              <Picker.Item label="हिन्दी" value="HN" />
              <Picker.Item label="ગુજરાતી" value="GU" />
              <Picker.Item label="বেঙ্গল" value="BA" />
              <Picker.Item label="मराठी" value="MR" />
              <Picker.Item label="ਪੰਜਾਬੀ" value="PJ" />
            </Picker>
            <Text>Selected: {language}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 10,
    backgroundColor: "#06477d",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsm: {
    height: 175,
    width: 175,
    borderRadius: 100,
    // margin: 10,
    backgroundColor: "#0b8aa3",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsmsm: {
    height: 150,
    width: 150,
    borderRadius: 100,
    // margin: 10,
    backgroundColor: "#0ed5eb",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginVertical: 20,
  },
  hstack: { alignItems: "center", marginVertical: 10 },
  label: {
    fontSize: 18,
    padding: 2,
    marginTop: 10,
  },
  input: {
    fontSize: 20,
    alignItems: "center",
    marginLeft: 20,
    color: "#000",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default UserSettingsScreen;
