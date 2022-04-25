import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import TutorialsScreen from "../screens/TutorialsScreen";
import GmailTutorialsScreen from "../screens/GmailTutorialsScreen";
import UserSettingsScreen from "../screens/UserSettingsScreen";
import GmailIndex from "../screens/GmailIndex";
import CongratulationsScreen from "../screens/CongratulationsScreen";
import WhatIsScreen from "../screens/WhatIsScreen";
import TestsScreen from "../screens/TestsScreen";

enableScreens();

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
      <Stack.Screen name="Tutorials" component={TutorialsScreen} />
      <Stack.Screen name="Gmail" component={GmailTutorialsScreen} />
      <Stack.Screen name="User Settings" component={UserSettingsScreen} />
      <Stack.Screen name="Gmail Index" component={GmailIndex} />
      <Stack.Screen name="Congratulations" component={CongratulationsScreen} />
      <Stack.Screen name="WhatIsScreen" component={WhatIsScreen} />
      <Stack.Screen name="TestsScreen" component={TestsScreen} />
    </Stack.Navigator>
  );
}
