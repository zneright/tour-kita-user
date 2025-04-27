import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/AppNavigator";
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 2ed488c982495022018e3cddad43ee7965521be1
>>>>>>> origin/main

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
