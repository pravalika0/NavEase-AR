// screens/ViewPlaces.js
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from "react-native";

// Import the view background image
const viewBackground = require("../public/view.png");

// Predefined places
const places = [
  { name: "CSE Department", location: "CSE" },
  { name: "IT Department", location: "IT" },
  {name: "ECE Department", location: "ECE"},
  { name: "Admin Lawn", location: "Admin" },
  { name: "Seminar Hall", location: "Admin" },
  { name: "R&D Center", location: "Admin" },
  { name: "SOIM", location: "Admin" },
  { name: "Principal Cabin", location: "Admin" },
  { name: "Atal Incubation Center", location: "Admin" },
  { name: "Administration", location: "Admin" },
  { name: "Multi Purpose Room", location: "Admin" },
];

const ViewPlaces = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter places based on search query
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground source={viewBackground} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Mapped Places</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search Places"
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Scrollable list of places */}
        <ScrollView contentContainerStyle={styles.placesContainer}>
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place, index) => (
              <View key={index} style={styles.placeCard}>
                <Text style={styles.placeText}>{place.name}</Text>
                <Text style={styles.placeDetails}>{place.location}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noResultsText}>No places found</Text>
          )}
        </ScrollView>
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
    paddingTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  searchInput: {
    width: "90%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 20,
    color: "#333",
  },
  placesContainer: {
    alignItems: "center",
  },
  placeCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  placeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  placeDetails: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  noResultsText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 20,
  },
});

export default ViewPlaces;
