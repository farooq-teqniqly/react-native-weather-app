import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import TodaysWeather from "./screens/TodaysWeather";
import HourlyWeather from "./screens/HourlyWeather";
import DailyWeather from "./screens/DailyWeather";
import CurrentTheme from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function configureIcon(name, color, size) {
  return <Ionicons name={name} size={size} color={color}></Ionicons>;
}

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: CurrentTheme.primary },
        headerTintColor: CurrentTheme.text,
        tabBarStyle: { backgroundColor: CurrentTheme.primary },
        tabBarActiveTintColor: CurrentTheme.text,
      }}
    >
      <BottomTabs.Screen
        name="TodaysWeather"
        component={TodaysWeather}
        options={{
          title: "Today's Weather",
          tabBarLabel: "Today",
          tabBarIcon: ({ color, size }) =>
            configureIcon("calendar", color, size),
        }}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="HourlyWeather"
        component={HourlyWeather}
        options={{
          title: "Hourly Weather",
          tabBarLabel: "Hourly",
          tabBarIcon: ({ color, size }) => configureIcon("time", color, size),
        }}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name="DailyWeather"
        component={DailyWeather}
        options={{
          title: "Daily Weather",
          tabBarLabel: "Daily",
          tabBarIcon: ({ color, size }) =>
            configureIcon("calendar", color, size),
        }}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabsNavigator}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CurrentTheme.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
