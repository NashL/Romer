import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import { FlatList, Platform, Text } from "react-native";
import React from "react";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ShopNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        options={defaultNavOptions}
        component={ProductsOverviewScreen}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
