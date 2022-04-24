import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

function NavigationHeader({ title, navigation }) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        elevation: 10,
      }}
    >
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="arrow-back-sharp"
          size={25}
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginVertical: 15,
          marginHorizontal: 30,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default NavigationHeader;
