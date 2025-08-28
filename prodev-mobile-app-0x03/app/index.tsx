import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./styles";

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
            <Text style={styles.entryText}>Entry Screen - Awesome</Text>

            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <Text style={styles.textLarge}>Typescript is great if you practice more</Text>
            <Text style={styles.textSmall}>React Native provides you a single codebase for cross platforms</Text>
            <Text style={styles.textSmall}>ALX is awesome</Text>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.continue}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
