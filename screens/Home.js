// screens/Home.js
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from "react-native";

// Import the home background image
const homeBackground = require("../public/home.png");

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={homeBackground} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to NavEase</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Navigate")}
        >
          <Text style={styles.buttonText}>Navigate</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Locate")}
        >
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
