import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedView } from "@/components/themed-view";
import CustomButton from "@/components/ui/CustomButton";
import InputComponent from "@/components/ui/InputComponent";
import PageTitle from "@/components/ui/PageTitle";
import BackButton from "@/components/util/BackButton";
import { router } from "expo-router";
const location = () => {
  const [location, setLocation] = useState("");
  const inputProps = {
    borderRadius: 10,
    borderWidth: 0.8,
    bgLightColor: "#AAAAAA14",
    bgDarkColor: "#7676802E",
    lightBorderColor: "#AAAAAA14",
    darkBorderColor: "#7676802E",
  };

  return (
    <AuthLayout
      spacestart={30}
      showGradient={true}
      Logo={() => <BackButton totalpages={4} currentpage={3} />}
      Header={() => (
        <PageTitle
          titleSize={14}
          subtitleSize={12}
          bottomgap={30}
          title="What's your Location?"
          nototp={true}
          subtitle="This will help us provide location-specific safety information and alerts."
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      <InputComponent
        {...inputProps}
        label="Location"
        placeholder="e.g Lagos, New York, London"
        inputState={location}
        setInputState={setLocation}
      />

      <View style={{ height: 4 }} />

      <CustomButton
        title="Use my current location"
        iconName="location-outline"
        lightColor="#F2F2F7"
        darkColor="#2C2C2E"
        lighttextColor="#000"
        darktextColor="#fff"
        onPress={() => {}}
      />
      <ThemedView style={{ marginTop: "auto" }} />
      <CustomButton
        title="Verify"
        onPress={() => {
          router.push("/(auth)/(register)/alertradius");
        }}
      />
    </AuthLayout>
  );
};

export default location;

const styles = StyleSheet.create({});
