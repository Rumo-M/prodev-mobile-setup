import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  largeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
    textAlign: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 15,
    textAlign: "center",
  },
  inputField: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordGroup: {
    width: "100%",
    marginBottom: 15,
  },
  formGroup: {
    width: "100%",
    marginVertical: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#007BFF",
    textAlign: "right",
    marginBottom: 20,
  },
  socialMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    width: "100%",
  },
});

export default styles;
