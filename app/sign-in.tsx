import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

export default function SignIn() {
  const handleLogin = () => {
    console.log("Login");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>
          <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get Your Ideal Home to {"\n"}{" "}
            <Text className="text-primary-300 text-3xl mt-1">YOU</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState wih Google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
            onPress={handleLogin}
          >
            <View className="flex flex-row item-center justify-center">
              <Image
                resizeMode="contain"
                source={icons.google}
                className="w-5 h-5"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continue With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
