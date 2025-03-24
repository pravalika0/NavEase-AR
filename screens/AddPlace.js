// screens/AddPlace.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from "react-native";
import * as Location from "expo-location";

// Import the add background image
const addBackground = require("../public/add.png");

const AddPlace = () => {
  const [newPlaceName, setNewPlaceName] = useState("");
  const [newPlaceLocation, setNewPlaceLocation] = useState("");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Location permission is required to add a place.");
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData.coords);
      if (locationData) {
        Alert.alert("Your Location", `Latitude: ${locationData.coords.latitude}, Longitude: ${locationData.coords.longitude}`);
      }
    };

    getLocationPermission();
  }, []);

  const handleAddPlace = () => {
    if (newPlaceName && newPlaceLocation) {
      alert("Place added successfully!");
      setNewPlaceName("");
      setNewPlaceLocation("");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <ImageBackground source={addBackground} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Add New Place</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Place Name"
          value={newPlaceName}
          onChangeText={setNewPlaceName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={newPlaceLocation}
          onChangeText={setNewPlaceLocation}
        />
        
        <TouchableOpacity style={styles.addButton} onPress={handleAddPlace}>
          <Text style={styles.addButtonText}>Add Place</Text>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddPlace;
