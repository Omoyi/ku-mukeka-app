import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Homepage() {
  const [language, setLanguage] = useState<"ENG" | "KIN">("ENG");

  // Switch labels based on language
  const labels = {
    ENG: {
      titleLeft: "Ku Mukeka",
      titleRight: "Let's Recount",
      contribute: "Contribute Oral Tradition",
      listen: "Listen to Oral Traditions",
    },
    KIN: {
      titleLeft: "Ku Mukeka",
      titleRight: "Duce Imigani",
      contribute: "Gusangiza Abandi Inkuru",
      listen: "Kumva imigani y'Inkuru",
    },
  };

  return (
    <ImageBackground
      // style={styles.container}
      source={require("../assets/main_bg.jpg")}
      className="flex-1"
      resizeMode="center"
    >
      {/* overlays */}
      <View className="absolute inset-0 bg-black/6" />
      <View className="absolute inset-0 bg-purple-700/40" />
      <Image
        source={require("../assets/Stars.png")}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      />

      <View className="flex-1 px-4 py-6">
        {/* Language toggle */}
        <TouchableOpacity
          style={styles.languageButton}
          className="absolute top-6 right-6 bg-white/20 rounded-full px-3 py-1"
          onPress={() => setLanguage(language === "ENG" ? "KIN" : "ENG")}
        >
          <Text className="text-white font-bold">{language}</Text>
        </TouchableOpacity>

        {/* Top grid */}
        <View className="flex-col md:flex-row items-center justify-between gap-6 flex-1">
          <Text className="text-white text-[32px] font-sankofa text-center">
            {labels[language].titleLeft}
          </Text>

          <Image
            source={require("../assets/Logo.png")}
            className="w-40 h-40"
            resizeMode="contain"
          />

          <Text className="text-white text-[32px] font-sankofa text-center">
            {labels[language].titleRight}
          </Text>
        </View>

        {/* Bottom grid */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity className="flex-1 bg-blue-600/60 rounded-xl p-6 items-center">
            <Image
              source={require("../assets/contribute.png")}
              className="w-16 h-16 mb-4"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-rethink">
              {labels[language].contribute}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 bg-purple-600/60 rounded-xl p-6 items-center">
            <Image
              source={require("../assets/listen.png")}
              className="w-16 h-16 mb-4"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-rethink">
              {labels[language].listen}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  languageButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  languageText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: 2,
    marginBottom: 20,
  },
  illustrationContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  treePlaceholder: {
    alignItems: 'center',
    position: 'relative',
  },
  treeEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  peopleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
    position: 'absolute',
    bottom: -10,
  },
  personEmoji: {
    fontSize: 24,
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 48,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: 2,
    marginTop: 40,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 30,
    flex: 1,
  },
  actionCard: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    minWidth: 300,
    minHeight: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  iconContainer: {
    backgroundColor: 'rgba(139, 92, 246, 0.6)',
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#8b5cf6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  actionText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  }
});