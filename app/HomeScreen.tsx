import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
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
        <View className="flex-col md:flex-row gap-6 mt-6">
          <TouchableOpacity className="flex-1 bg-blue-600/60 rounded-xl p-6 items-center">
            <Image
              source={require("../assets/ContributeIcon.png")}
              className="w-16 h-16 mb-4"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-rethink">
              {labels[language].contribute}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 bg-purple-600/60 rounded-xl p-6 items-center">
            <Image
              source={require("../assets/ListenIcon.png")}
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
