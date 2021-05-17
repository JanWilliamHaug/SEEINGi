import * as React from "react";
import { Image, ImageBackground, StyleSheet, View, Button } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import MainScreen from "./app/screens/MainScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./app/assets/background.png")}
    >
      <Image style={styles.logo} source={require("./app/assets/logo.png")} />
      <View style={styles.registerButton}>
        <Button
          style={styles.button}
          color="native"
          title="GET STARTED FOR FREE"
          onPress={() => navigation.navigate("Register")}
        />
      </View>

      <View style={styles.loginButton}>
        <Button
          style={styles.button}
          color="native"
          title="HAVE AN ACCOUNT ALREADY? SIGN IN"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  loginButton: {
    width: "100%",
    height: 32,
    backgroundColor: "#ff5969",
    position: "absolute",
    top: 610,
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 180,
    position: "absolute",
    top: 260,
    left: 95,
  },
  registerButton: {
    width: "100%",
    height: 32,
    backgroundColor: "#92d050",
    position: "absolute",
    top: 575,
    justifyContent: "flex-end",
  },
});

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Hello" component={WelcomeScreen} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

/**
 * 
 * 
 * 
 * 
 * 
 *   loginButton: {
    width: "100%",
    height: 30,
    backgroundColor: "#ff5969",
    justifyContent: "center",
  },
 * 
 * 
 *         />
        <Regi.Screen name="EditPost" component={EditPost} />
      </RootStack.Navigator>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
