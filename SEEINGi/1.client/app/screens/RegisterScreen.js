import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text,
  TextInput,
} from "react-native";

function RegisterScreen({ navigation }) {
  const [userFn, setUserFn] = useState(""); //for user name input box
  const [userLn, setUserLn] = useState(""); //for user name input box
  const [userName, setUserName] = useState(""); //for user name input box
  const [userEmail, setUserEmail] = useState(""); //for user name input box
  const [password1, setPassword1] = useState(""); //for user name input box
  const [password2, setPassword2] = useState(""); //for user name input box

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        flexDirection: "row", //primary axis byDir
        justifyContent: "center", //along main axis
        alignItems: "center", //align group along secondary axis of each line
      }}
    >
      <TextInput
        keyboardType="default"
        maxLength={40}
        onChangeText={(text) => setUserFn(text)}
        placeholder="First Name"
        placeholderTextColor="#ccc"
        style={styles.userFn}
      />

      <TextInput
        keyboardType="default"
        maxLength={40}
        onChangeText={(text) => setUserLn(text)}
        placeholder="Last Name"
        placeholderTextColor="#ccc"
        style={styles.userLn}
      />

      <TextInput
        keyboardType="default"
        maxLength={40}
        onChangeText={(text) => setUserName(text)}
        placeholder="User Name"
        placeholderTextColor="#ccc"
        style={styles.userName}
      />
      <TextInput
        keyboardType="default"
        maxLength={40}
        onChangeText={(text) => setUserEmail(text)}
        placeholder="Email Address"
        placeholderTextColor="#ccc"
        style={styles.userEmail}
      />

      <TextInput
        keyboardType="default"
        secureTextEntry
        textContentType="password"
        maxLength={40}
        onChangeText={(text) => setPassword1(text)}
        placeholder="Password"
        placeholderTextColor="#ccc"
        style={styles.password1}
      />

      <TextInput
        keyboardType="default"
        secureTextEntry
        textContentType="password"
        maxLength={40}
        onChangeText={(text) => setPassword2(text)}
        placeholder="Password"
        placeholderTextColor="#ccc"
        style={styles.password2}
      />

      <View style={styles.createAccountButton}>
        <Button
          style={styles.button}
          color="native"
          title="CREATE ACCOUNT"
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      <View
        style={{
          backgroundColor: "#52cbbe",
          width: "100%",
          height: 50,
          position: "absolute",
          alignSelf: "flex-start",
        }}
      />
      <StatusBar style="auto" />
      <Text style={styles.banner}> Create your SEEINGi account... </Text>
      <View style={styles.loginButton}>
        <Button
          style={styles.button}
          color="native"
          title="HAVE AN ACCOUNT ALREADY? SIGN IN"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    top: 15,
  },

  button: {
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  createAccountButton: {
    width: "100%",
    height: 32,
    backgroundColor: "#f9c50e",
    position: "absolute",
    top: 633,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 32,
    backgroundColor: "#ff5969",
    position: "absolute",
    top: 665,
    justifyContent: "center",
  },
  password1: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 420,
    left: 10,
  },

  password2: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 500,
    left: 10,
  },

  userFn: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 100,
    left: 10,
  },

  userLn: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 180,
    left: 10,
  },

  userName: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 260,
    left: 10,
  },

  userEmail: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 340,
    left: 10,
  },
});
export default RegisterScreen;
