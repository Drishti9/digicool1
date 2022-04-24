import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import TutorialsScreen from "../screens/TutorialsScreen";
import GmailTutorialsScreen from "../screens/GmailTutorialsScreen";
import UserSettingsScreen from "../screens/UserSettingsScreen";

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
    </Stack.Navigator>
  );
}
