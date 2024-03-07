// Rock Paper Scissor Game Code 

// first you can import dependencies
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";


//import our number of pages
import firstPage from './firstPage';
import secondPage from './secondPage';
import { Colors } from "react-native/Libraries/NewAppScreen";


//this Stack is used to create a navigation in between screen in our project
const Stack = createNativeStackNavigator();


//Start our Project
const App = () =>{

  // LogBox is used to remove all YellowBox in our Screen
  LogBox.ignoreAllLogs();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first">
        <Stack.Screen name="first" component={firstPage} options={{title:"Welcome"}}/>
        <Stack.Screen name="second" component={secondPage} options={{title:"Back"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;