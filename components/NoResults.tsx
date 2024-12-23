import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NoResults = () => {
  return (
    <View className="flex items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMethod="scale"
      />
      <Text className="text-2xl font-rubik-bold mt-5 text-black-300">
        NoResults
      </Text>
      <Text className="text-base text-black-100 mt-2">
        We could not find nay results
      </Text>
    </View>
  );
};

export default NoResults;
