import React from "react";
import { StyleSheet, View } from "react-native";

import Gmail from "../components/gmail";

function GmailIndex(props) {
  console.log(props.route.params+"dfcbfkdb");
  const lang= props.route.params ? props.route.params.lang : "en";
  // console.log(lang+" vsv "+props.route.params.lang);


  return (
    <View style={styles.container} {...props}>
      <Gmail language={lang}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default GmailIndex;
