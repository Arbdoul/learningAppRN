import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import CourseDetailScreen from "../Screens/CourseDetailScreen";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={TabNavigation} />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});