import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.container}>

  <Text style={styles.largeText}>Typescript is great if you practice more</Text>
  <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
  <Text style={styles.smallText}>ALX is awesome</Text>

  {/* existing content stays below */}
</View>


          {/* --- THREE ADDITIONAL TEXT COMPONENTS --- */}
          <Text style={styles.largeText}>Typescript is great if you practice more</Text>
          <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
          <Text style={styles.smallText}>ALX is awesome</Text>

          {/* Entry Screen Text */}
          <Text style={styles.entryText}>Entry Screen - Awesome</Text>

          {/* Login Form */}
          <Text style={styles.largeText}>Welcome Back!</Text>
          <Text style={styles.placeholderText}>Enter your email and password to sign in.</Text>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.passwordGroup}>
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.largeText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.placeholderText}>or continue with</Text>

          <View style={styles.navGroup}>
            <TouchableOpacity style={styles.socialMediaButton}>
              <Image
                source={require("@/assets/images/google.png")}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialMediaButton}>
              <Image
                source={require("@/assets/images/facebook.png")}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  entryText: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 12,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  mediumText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
    textAlign: "center",
  },
  smallText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#555",
    marginVertical: 8,
    textAlign: "center",
  },
  formGroup: {
    width: "100%",
    marginVertical: 8,
  },
  passwordGroup: {
    width: "100%",
    marginVertical: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    fontSize: 16,
    marginBottom: 8,
  },
  forgotPasswordText: {
    color: "#007BFF",
    marginBottom: 16,
    textAlign: "right",
    width: "100%",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 12,
    alignItems: "center",
    width: "100%",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 16,
  },
  socialMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
