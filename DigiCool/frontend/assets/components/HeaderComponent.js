import React from "react";
import {
  StyleSheet,
  Container,
  Button,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { HStack, StatusBar } from "native-base";
import { AntDesign, Ionicons } from "react-native-vector-icons";
import language from "../global/language";
import * as Speech from "expo-speech";

function HeaderComponent({ navigation, text }) {
  const voice_options = {
    voice: "hi-in-x-hid-network",
    volume: 1000,
  };

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    //console.log(voices);
  };

  React.useEffect(listAllVoiceOptions);

  return (
    <View>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
      <HStack
        style={{
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#61dafb",
        }}
      >
        <TouchableHighlight
          underlayColor="#021626"
          title="User"
          style={({ marginRight: 15 }, styles.button)}
          onPress={() => navigation.navigate("User Settings")}
        >
          <AntDesign name="user" color="white" size={35} />
        </TouchableHighlight>

        <View style={{ flexDirection: "row", marginRight: 5 }}>
          <TouchableHighlight
            underlayColor="#000"
            title="Speaker"
            style={styles.button}
            // onPress={() => navigation.navigate("Congratulations")}
            onPress={() => {
              console.log("abckdmcl");
              Speech.speak(text, voice_options);
            }}
          >
            <Ionicons name="volume-medium" color="white" size={35} />
          </TouchableHighlight>
          {/* <TouchableHighlight
            title="Mic"
            style={styles.button}
            onPress={() => navigation.navigate("Congratulations")}
          >
            <Ionicons name="mic" color="white" size={35} />
          </TouchableHighlight> */}
        </View>
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 65,
    width: 65,
    borderRadius: 65,
    margin: 10,
    backgroundColor: "#06477d",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeaderComponent;
