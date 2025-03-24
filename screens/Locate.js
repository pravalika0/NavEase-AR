import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

// Background image
const locateBackground = require("../public/navigate.png");

const Locate = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  // Dropdown open states
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);

  const navigation = useNavigation();

  const places = [
    { label: "Entrance", value: "Entrance" },
    { label: "Admin", value: "Admin" },
    { label: "CSE Department", value: "CSE" },
    { label: "IT Department", value: "IT" },
    { label: "ECE Department", value: "ECE" },
    { label: "Admin Lawn", value: "Admin Lawn" },
    { label: "SOIM", value: "SOIM" },
    { label: "Principal Cabin", value: "Principal Cabin" },
    { label: "Atal Incubation Center", value: "Atal Incubation Center" },
    { label: "Library", value: "Library" },
    { label: "IT Block", value: "IT Block" },
    { label: "CSE Canteen", value: "CSE Canteen" },
  ];

  const handleStart = () => {
    if (startLocation && destination) {
      navigation.navigate("NavigateScreen", { startLocation, destination });
    } else {
      alert("Please select both start and destination locations.");
    }
  };

  return (
    <ImageBackground source={locateBackground} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.header}>Locate Your Destination</Text>

        {/* Start Location Dropdown */}
        <View style={[styles.dropdownWrapper, { zIndex: isStartOpen ? 2000 : 1 }]}>
          <Text style={styles.label}>Start Location:</Text>
          <DropDownPicker
            open={isStartOpen}
            value={startLocation}
            items={places}
            setOpen={(open) => {
              setIsStartOpen(open);
              if (open) setIsDestinationOpen(false); // Close destination dropdown
            }}
            setValue={setStartLocation}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            placeholder="Select Start Location"
          />
        </View>

        {/* Destination Dropdown */}
        <View
          style={[
            styles.dropdownWrapper,
            { zIndex: isDestinationOpen ? 2000 : 1, marginTop: isStartOpen ? 120 : 0 },
          ]}
        >
          <Text style={styles.label}>Destination:</Text>
          <DropDownPicker
            open={isDestinationOpen}
            value={destination}
            items={places}
            setOpen={(open) => {
              setIsDestinationOpen(open);
              if (open) setIsStartOpen(false); // Close start location dropdown
            }}
            setValue={setDestination}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            placeholder="Select Destination"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  dropdownWrapper: {
    width: "100%",
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#4CAF50",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  dropdownContainer: {
    borderColor: "#4CAF50",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Locate;
