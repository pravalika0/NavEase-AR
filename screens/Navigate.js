// screens/Navigate.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";

// Import the navigate background image
const navigateBackground = require("../public/navigate.png");

const Navigate = ({ navigation }) => {
  return (
    <ImageBackground source={navigateBackground} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Navigation Options</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddPlace")}
        >
          <Text style={styles.buttonText}>Add Place</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ViewPlaces")}
        >
          <Text style={styles.buttonText}>View Places</Text>
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
    backgroundColor: "#FF6347",
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

export default Navigate;
