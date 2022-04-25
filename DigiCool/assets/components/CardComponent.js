import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

function CardComponent(props) {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <View style={styles.content}>{props.children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#666",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 18,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default CardComponent;
