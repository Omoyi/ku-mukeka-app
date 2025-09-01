import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import ContributeIconSVG from './assets/ContributeIcon.svg';
import ListenIconSVG from './assets/ListenIcon';

const { width, height } = Dimensions.get('window');

// Placeholder SVG components - replace with your actual SVG icons
const ContributeIcon = () => (
  <View className="w-8 h-8 bg-white/30 rounded" />
);

const ListenIcon = () => (
  <View className="w-8 h-8 bg-white/30 rounded" />
);

export default function HomeScreen() {
  const handleContribute = () => {
    // Navigate to contribution screen
    console.log('Navigate to Contribute');
  };

  const handleListen = () => {
    // Navigate to listening/library screen
    console.log('Navigate to Listen');
  };

  return (
    <View className="flex-1">
      {/* Background Image */}
      <ImageBackground
        source={{ uri: './assets/main_bg' }}
        resizeMode="cover"
      >
        {/* Black Overlay */}
        <View className=" " />
        
        {/* Blue Overlay */}
        <View className="" />
        {/* Header Section */}
        <View className="flex-1 justify-center items-center px-6">
          {/* Title */}
          <View className="mb-8">
            <Text className="text-white text-4xl md:text-6xl font-light text-center tracking-widest">
              Ku Mukeka
            </Text>
            <Text className="text-white/80 text-lg md:text-xl text-center mt-2 tracking-wide">
              Let's Recount
            </Text>
          </View>

          {/* Decorative Tree and People Silhouettes */}
          <View className="flex-1 justify-center items-center mb-16">
            
          </View>
        </View>

        {/* Bottom Action Cards */}
        <View className="absolute bottom-0 left-0 right-0 h-64 bg-white/10 backdrop-blur-sm">
          <View className="flex-1 flex-row">
            {/* Contribute Card */}
            <TouchableOpacity 
              onPress={handleContribute}
              className="flex-1 justify-center items-center border-r border-white/20 active:bg-white/10"
              style={{ minHeight: 200 }}
            >
              <View className="bg-white/20 rounded-full p-4 mb-4">
                <ContributeIcon />
              </View>
              <Text className="text-white text-lg font-medium text-center px-4">
                Contribute Oral Tradition
              </Text>
            </TouchableOpacity>

            {/* Listen Card */}
            <TouchableOpacity 
              onPress={handleListen}
              className="flex-1 justify-center items-center active:bg-white/10"
              style={{ minHeight: 200 }}
            >
              <View className="bg-white/20 rounded-full p-4 mb-4">
                <ListenIcon />
              </View>
              <Text className="text-white text-lg font-medium text-center px-4">
                Listen to Oral Traditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Decorative Stars/Dots */}
        <View className="absolute top-20 left-10">
          <View className="w-1 h-1 bg-white/40 rounded-full" />
        </View>
        <View className="absolute top-32 right-16">
          <View className="w-1 h-1 bg-white/40 rounded-full" />
        </View>
        <View className="absolute top-48 left-1/4">
          <View className="w-1 h-1 bg-white/40 rounded-full" />
        </View>
        <View className="absolute top-64 right-1/3">
          <View className="w-1 h-1 bg-white/40 rounded-full" />
        </View>
      </ImageBackground>
    </View>
  );
}
