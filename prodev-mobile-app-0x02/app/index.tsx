import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Entry Screen Text */}
            <Text style={styles.entryText}>Entry Screen - Awesome</Text>

            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Additional Text Components */}
            <Text style={styles.largeText}>
              Typescript is great if you practice more
            </Text>
            <Text style={styles.mediumText}>
              React Native provides you a single codebase for cross platforms
            </Text>
            <Text style={styles.smallText}>ALX is awesome</Text>

            {/* Buttons */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* Continue Prompt */}
            <View style={styles.continue}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  background: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },
  entryText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },
  mediumText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },
  smallText: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
  },
  transparentButton: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
  },
  continue: {
    alignItems: "center",
    paddingVertical: 20,
  },
  textSmall: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});
