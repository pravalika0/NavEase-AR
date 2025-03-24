// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Navigate from "./screens/Navigate";
import AddPlace from "./screens/AddPlace";
import ViewPlaces from "./screens/ViewPlaces";
import Locate from "./screens/Locate";
import NavigateScreen from "./screens/NavigateScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Navigate" component={Navigate} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
        <Stack.Screen name="ViewPlaces" component={ViewPlaces} />
        <Stack.Screen name="Locate" component={Locate} />
        <Stack.Screen name="NavigateScreen" component={NavigateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
