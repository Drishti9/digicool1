import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Text } from "react-native";
// import WAHomeScreen from "./assets/screens/WAHomeScreen";
import HeaderComponent from "./assets/components/HeaderComponent";
import WelcomeScreen from "./assets/screens/WelcomeScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import TutorialsScreen from "./assets/screens/TutorialsScreen";
import GmailTutorialsScreen from "./assets/screens/GmailTutorialsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./assets/navigation/NavigationStack";

//import { AlanView } from "@alan-ai/alan-sdk-react-native";

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <HeaderComponent /> */}
        <NavigationStack />
        {/* <Stack.Navigator>
          <Stack.Screen
            options={{ headerLargeTitle: true, headerShown: false }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            // options={{ headerShown: false }}
            name="Tutorials"
            component={TutorialsScreen}
          />
          <Stack.Screen name="Gmail" component={GmailTutorialsScreen} />
        </Stack.Navigator> */}
        {/* <WelcomeScreen /> */}
      </NativeBaseProvider>
      {/* <AlanView
        projectid={
          "6bfb36c47b7ef4b204b3b338e4e1f5dc2e956eca572e1d8b807a3e2338fdd0dc/stage"
        }
      /> */}
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
