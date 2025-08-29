import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Welcome Back!</Text>
      <Text style={styles.placeholderText}>
        Enter your email and password to sign in.
      </Text>

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
  );
}
