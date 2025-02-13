import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

//--------------Home--------------------
import Home from "../screens/Home";
import Login from "../screens/Login";
//------------Screens-------------------
import onedaytrip from "../screens/onedaytrip"
import LocalTrip from "../screens/localTrip";
import Normaltaxi from "../screens/Normaltaxi";
import Hillstrip from "../screens/Hillstrip";
//-----------Billing screens------------
import Billonedaytrip from "../screens/Billonedaytrip"
import Billnormaltrip from "../screens/Billnormaltaxi"
import Billhillstrip from "../screens/Billhillstrip"
import Billlocaltrip from "../screens/Billlocaltrip";
//----------Context Providers-----------
import {BillingContextProvider} from "../context/BillingContextProvider";
import {LocalContextProvider} from "../context/LocalContextProvider";
import {NormalContextProvider} from "../context/NormalContextProvider";
import {HillsContextProvider} from "../context/HillsContextProvider";
import { AuthContextProvider } from "../context/AuthContextProvider";
//--------------------------------------
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <AuthContextProvider>
    <BillingContextProvider>
      <LocalContextProvider>
       <NormalContextProvider>
       <HillsContextProvider>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      
        <Stack.Screen name="localTrip" component={LocalTrip} />
        <Stack.Screen name="onedaytrip" component={onedaytrip} />
        <Stack.Screen name="Billonedaytrip" component={Billonedaytrip} />
        <Stack.Screen name="Billnormaltrip" component={Billnormaltrip} />
        <Stack.Screen name="Billhillstrip" component={Billhillstrip} />
        <Stack.Screen name="Billlocaltrip" component={Billlocaltrip} />
        <Stack.Screen name="Hillstrip" component={Hillstrip} />
        <Stack.Screen name="Normaltaxi" component={Normaltaxi} />
      </Stack.Group>
    </Stack.Navigator>
    </HillsContextProvider>
    </NormalContextProvider>
    </LocalContextProvider>
    </BillingContextProvider>
    </AuthContextProvider>
  
  );
};
export default StackNavigator;

const styles = StyleSheet.create({});
