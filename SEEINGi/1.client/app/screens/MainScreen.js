import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import {}} from './Child.jsx'

export default function MainScreen(props) {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.sendImage}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonSend}>SEND</Text>
          <Image style={styles.eye2} source={require("../assets/eye.png")} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "#7e8e8e",
        flex: 1,
        flexDirection: "row", //primary axis byDir
        justifyContent: "center", //along main axis
        alignItems: "center", //align group along secondary axis of each line
      }}
    >
      <Text style={styles.topInstructions}>
        1. Press HISTORY to look at your SEEINGi serach history.{"\n"}
        2. Press LAST to look at the result of your last search.{" "}
      </Text>

      <Text style={styles.instructions}>
        {" "}
        3. To send a photo just press CAPTURE!{" "}
      </Text>

      <View style={styles.sendButton}>
        <Button style={styles.button} color="#f8cf4d" title="SEND" />
      </View>

      <View style={styles.startCaptureButton}>
        <Button
          style={styles.button}
          color="native"
          title="CAPTURE"
          onPress={Apps.props.s}
        />
        <Image style={styles.eye} source={require("../assets/eye.png")} />
      </View>

      <View style={styles.viewHistoryButton}>
        <Button style={styles.button} color="native" title="HISTORY" />
      </View>

      <View style={styles.viewLastButton}>
        <Button style={styles.button} color="native" title="LAST" />
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
      <Text style={styles.banner}> Choose a task... </Text>
    </View>
  ); //onPress={openImagePickerAsync}
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
  buttonSend: {
    fontSize: 30,
    color: "#ffffff",
    position: "relative",
    top: 42,
    left: 23,
  },
  eye: {
    width: 90,
    height: 90,
    position: "absolute",
    top: 0,
    left: 17,
  },
  eye2: {
    width: 90,
    height: 90,
    position: "absolute",
    top: -40,
    left: 17,
  },
  instructions: {
    color: "#ffffff",
    position: "absolute",
    top: 355,
  },
  topInstructions: {
    color: "#ffffff",
    position: "absolute",
    top: 100,
  },
  lastPage: {
    backgroundColor: "yellow",
  },
  sendButton: {
    //backgroundColor: "#f9c50e",
    width: 120,
    height: 50,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  sendImage: {
    backgroundColor: "#6c747d", //#6c747d
    width: 125,
    height: 125,
    position: "absolute",
    top: 225,
    alignSelf: "center",
    justifyContent: "center",
  },
  startCaptureButton: {
    width: 125,
    height: 125,
    backgroundColor: "#6c747d",
    position: "absolute",
    top: 225,
    justifyContent: "flex-end",
  },
  viewHistoryButton: {
    width: "40%",
    height: 40,
    //backgroundColor: "#6c747d",
    position: "absolute",
    top: 175,
    left: 20,
    justifyContent: "center",
  },
  viewLastButton: {
    width: "40%",
    height: 40,
    //backgroundColor: "#6c747d", //6c747d
    position: "absolute",
    top: 175,
    left: 190,
    justifyContent: "center",
  },
});

/**
 *
BONEYARD
      <Text style={styles.topInstructions}>
        {" "}
        1. Press History to look at your SEEINGi serach history.
        2. Press Last to look at the result of your last search.
        {" "}
      </Text>









 *
 */
