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

function UserSettingsScreen({ navigation }) {
  const [currency, setCurrency] = useState("US Dollar");
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <View
        style={{
          alignItems: "center",
          width: Dimensions.get("window").width,
          elevation: 10,
          backgroundColor: "#fff",
        }}
      >
        <Text style={styles.title}>User Settings</Text>
      </View>

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

        <View style={{ margin: 20, marginTop: 30 }}>
          <HStack style={styles.hstack}>
            <Text style={styles.label}> Name: </Text>
            <TextInput style={styles.input} placeholder="Email" />
          </HStack>
          <HStack style={{ alignItems: "center", marginVertical: 10 }}>
            <Text style={styles.label}>Mobile No.:</Text>
            <TextInput style={styles.input} placeholder="Email" />
          </HStack>

          <HStack style={{ alignItems: "center", marginVertical: 10 }}>
            <Text style={styles.label}>Prefferred Language:</Text>
            <Picker
              style={{
                height: 50,
                width: 150,
                backgroundColor: "#fff",
                color: "#000",
                mode: "dropdown",
                border: "black",
              }}
              //   style={styles.input}
              selectedValue={currency}
              onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
            >
              <Picker.Item label="USD" value="US Dollars" />
              <Picker.Item label="EUR" value="Euro" />
              <Picker.Item label="NGN" value="Naira" />
            </Picker>

            {/* <Picker
              selectedValue={currency}
              onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
            >
              <Picker.Item label="USD" value="US Dollars" />
              <Picker.Item label="EUR" value="Euro" />
              <Picker.Item label="NGN" value="Naira" />
            </Picker> */}
          </HStack>

          <Picker
            selectedValue={currency}
            onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
          >
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text>Selected: {currency}</Text>

          <Picker
            selectedValue={currency}
            onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
          >
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>

          <Picker
            selectedValue={currency}
            onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
          >
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text>Selected: {currency}</Text>

          <View>
            <Picker
              selectedValue={currency}
              onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
            >
              <Picker.Item label="USD" value="US Dollars" />
              <Picker.Item label="EUR" value="Euro" />
              <Picker.Item label="NGN" value="Naira" />
            </Picker>
            <Text>Selected: {currency}</Text>
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
    width: "25%",
  },
  input: {
    backgroundColor: "#fff",
    width: "65%",
    alignItems: "center",
    height: 40,
    marginLeft: 20,
    color: "#000",
  },
});

export default UserSettingsScreen;
