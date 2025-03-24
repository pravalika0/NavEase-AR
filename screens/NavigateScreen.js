import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import * as Speech from "expo-speech";

const translations = {
  en: {
    text: [
      "You are currently at IT department",
      "Head straight for 50 meters",
      "Turn right",
      "Continue in the same direction for 50 meters",
      "Towards your left is your destination",
      "You have reached your destination ECE"
    ],
    label: "English",
    speechLang: "en-US",
  },
  hi: {
    text: [
      "आप वर्तमान में आईटी विभाग में हैं",
      "50 मीटर सीधे जाएं",
      "दाएं मुड़ें",
      "एक ही दिशा में जारी रखें",
      "आपका गंतव्य बाईं ओर है",
      "आप अपने गंतव्य ईसीई पर पहुंच गए हैं",
    ],
    label: "हिन्दी",
    speechLang: "hi-IN",
  },
  te: {
    text: [
      "మీరు ప్రస్తుతం ఐటి విభాగంలో ఉన్నారు",
      "50 మీటర్ల వరకు నేరుగా వెళ్లండి",
      "కుడివైపుకు తిరగండి",
      "అదే దిశలో కొనసాగండి",
      "మీ గమ్యం మీ ఎడమవైపున ఉంది",
      "మీరు మీ గమ్యం ECE చేరుకున్నారు",
    ],
    label: "తెలుగు",
    speechLang: "te-IN",
  },
};

const NavigateScreen = () => {
  const [language, setLanguage] = useState("en");
  const [directions, setDirections] = useState(translations.en.text);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const handleReadAloud = () => {
    if (directions.length > 0) {
      Speech.speak(directions.join(". "), { language: translations[language].speechLang });
      setIsVoiceActive(true);
    }
  };

  const handlePauseVoice = () => {
    if (isVoiceActive) {
      Speech.stop();
      setIsVoiceActive(false);
    }
  };

  const handleSelectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setDirections(translations[selectedLanguage].text);
    setLanguageModalVisible(false);
    Alert.alert("Language Selected", `You selected ${translations[selectedLanguage].label}.`);
  };

  return (
    <View style={styles.container}>
      {/* Empty Upper Space */}
      <View style={styles.emptySpace}></View>

      {/* Directions Box */}
      <View style={styles.directionsBox}>
        <Text style={styles.directionsHeader}>Directions</Text>
        {directions.map((direction, index) => (
          <Text key={index} style={styles.directionText}>
            {direction}
          </Text>
        ))}
        <View style={styles.directionsButtons}>
          <TouchableOpacity style={styles.button} onPress={handleReadAloud}>
            <Text style={styles.buttonText}>Read Aloud</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.stopButton]}
            onPress={handlePauseVoice}
          >
            <Text style={styles.buttonText}>{isVoiceActive ? "Pause" : "Stop"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons Below Directions Box */}
      <View style={styles.buttonsOutside}>
        <TouchableOpacity style={styles.button} onPress={() => setLanguageModalVisible(true)}>
          <Text style={styles.buttonText}>Select Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Navigation</Text>
        </TouchableOpacity>
      </View>

      {/* Language Selection Modal */}
      <Modal animationType="slide" transparent={true} visible={languageModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose Language</Text>
            {Object.keys(translations).map((langKey) => (
              <TouchableOpacity
                key={langKey}
                style={styles.modalOption}
                onPress={() => handleSelectLanguage(langKey)}
              >
                <Text style={styles.modalOptionText}>{translations[langKey].label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setLanguageModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  emptySpace: { flex: 1 },
  directionsBox: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: 10,
    marginBottom: 20,
  },
  directionsHeader: { color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  directionText: { color: "#fff", fontSize: 16, marginVertical: 5, textAlign: "left" },
  directionsButtons: { flexDirection: "row", justifyContent: "space-around", marginTop: 15 },
  button: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 5, flex: 1, marginHorizontal: 5, alignItems: "center" },
  stopButton: { backgroundColor: "#f44336" },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  buttonsOutside: { flexDirection: "row", justifyContent: "space-around" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center" },
  modalContainer: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "80%", alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalOption: { padding: 10, backgroundColor: "#ddd", borderRadius: 5, marginVertical: 5, width: "80%", alignItems: "center" },
  modalOptionText: { fontSize: 16, fontWeight: "bold" },
  modalCloseButton: { backgroundColor: "#f44336", padding: 10, borderRadius: 5, marginTop: 10 },
  modalCloseButtonText: { color: "#fff" },
});

export default NavigateScreen;
