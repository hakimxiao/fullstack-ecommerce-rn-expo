import { View, Text } from "react-native";
import React from "react";
import SafeScreen from "@/components/SafeScreen";

const ProfileScreen = () => {
  return (
    <SafeScreen>
      <View>
        <Text className="text-white">ProfileScreen</Text>
      </View>
    </SafeScreen>
  );
};

export default ProfileScreen;
