import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text,
  Image,
  TextInput,
} from "react-native";

function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState(""); //for user name input box
  const [password, setPassword] = useState(""); //for user name input box
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
        onChangeText={(text) => setUserName(text)}
        placeholder="User Name"
        placeholderTextColor="#ccc"
        style={styles.userName}
      />

      <TextInput
        keyboardType="default"
        secureTextEntry
        textContentType="password"
        maxLength={40}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="#ccc"
        style={styles.password}
      />

      <Text style={styles.separator}>
        {" "}
        ----------------------------- OR-----------------------------{" "}
      </Text>

      <View style={styles.signinButton}>
        <Button
          style={styles.button}
          color="native"
          title="LOGIN"
          onPress={() => navigation.navigate("Main")}
        />
      </View>
      <View style={styles.facebookButton}>
        <Button
          style={styles.button}
          color="native"
          title="LOGIN WITH FACEBOOK"
          onPress={() => navigation.navigate("Main")}
        />
        <Image
          style={styles.facebookLogo}
          source={require("../assets/F.png")}
        />
      </View>
      <View style={styles.twitterButton}>
        <Button
          style={styles.button}
          color="native"
          title="LOGIN WITH TWITTER"
          onPress={() => navigation.navigate("Main")}
        />
        <Image style={styles.twitterLogo} source={require("../assets/T.png")} />
      </View>
      <View style={styles.googleButton}>
        <Button
          buttonStyle="raised"
          style={styles.button}
          color="native"
          title="LOGIN WITH GOOGLE"
          onPress={() => navigation.navigate("Main")}
        />
        <Image style={styles.googleLogo} source={require("../assets/G.png")} />
      </View>

      <View
        style={{
          backgroundColor: "#ff5969",
          width: "100%",
          height: 50,
          position: "absolute",
          alignSelf: "flex-start",
        }}
      />
      <StatusBar style="auto" />
      <Text style={styles.banner}>
        {" "}
        Login with your SEEINGi account information...{" "}
      </Text>
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

  facebookButton: {
    width: "95%",
    height: 50,
    backgroundColor: "#c1ccdb", //"#48525f"
    position: "absolute",
    top: 400,
    alignSelf: "flex-end",
  },
  facebookLogo: {
    width: 48,
    height: 48,
    position: "absolute",
    top: 1,
    left: 10,
  },

  googleButton: {
    width: "95%",
    height: 50,
    backgroundColor: "#48525f", //"#c1ccdb"
    position: "absolute",
    top: 560,
    alignSelf: "flex-end",
    borderColor: "black",
    justifyContent: "center",
  },
  googleLogo: {
    width: 48,
    height: 48,
    position: "absolute",
    top: 1,
    left: 10,
  },
  password: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 2,
    width: "93%",
    borderWidth: 1,
    position: "absolute",
    top: 160,
    left: 10,
  },

  separator: {
    color: "#000000",
    fontWeight: "bold",
    position: "absolute",
    top: 340,
  },

  signinButton: {
    width: "95%",
    height: 50,
    backgroundColor: "#48525f",
    position: "absolute",
    top: 250,
    alignSelf: "flex-end",
  },
  twitterButton: {
    width: "95%",
    height: 50,
    backgroundColor: "#8692a7",
    position: "absolute",
    top: 480,
    alignSelf: "flex-end",
  },
  twitterLogo: {
    width: 48,
    height: 48,
    position: "absolute",
    top: 1,
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
    top: 80,
    left: 10,
  },
});
export default LoginScreen;
