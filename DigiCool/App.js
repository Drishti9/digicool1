import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Text } from "react-native";
// import WAHomeScreen from "./assets/screens/WAHomeScreen";
import HeaderComponent from "./assets/components/HeaderComponent";
import WelcomeScreen from "./assets/screens/WelcomeScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
        {/* <WelcomeScreen /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
