// screens/Login.js
import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  const loginBackground = require("../public/login.png");
  return (
    <ImageBackground
      source={loginBackground} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>NavEase</Text>
        <View style={styles.formContainer}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotLink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContent}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  formContainer: {
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotLink: {
    color: "#007BFF",
    textAlign: "center",
    marginTop: 10,
  },
  subContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    color: "#fff",
  },
  signUpLink: {
    color: "#FFD700",
    fontWeight: "bold",
  },
});

export default Login;
