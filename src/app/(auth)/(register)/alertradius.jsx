import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedView } from "@/components/themed-view";
import CustomButton from "@/components/ui/CustomButton";
import PageTitle from "@/components/ui/PageTitle";
import RangeSlider from "@/components/ui/RangeSlider";
import BackButton from "@/components/util/BackButton";
import { router } from "expo-router";
const alertradius = () => {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [radius, setRadius] = useState(1.2);
  const [otp, setOtp] = useState("");
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
      Logo={() => <BackButton totalpages={4} currentpage={4} />}
      Header={() => (
        <PageTitle
          titleSize={14}
          subtitleSize={12}
          bottomgap={30}
          title="What's your Alert Radius?"
          nototp={true}
          subtitle="This will help us provide location-specific safety information and alerts."
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      {/* <InputComponent
        {...inputProps}
        label="Alert Radius"
        placeholder="e.g 5km, 10km"
        inputState={otp}
        setInputState={setOtp}
      /> */}

      <RangeSlider
        value={radius}
        setValue={setRadius}
        min={0.5}
        max={3}
        step={0.5}
        unit="KM"
        minLabel="500M"
        maxLabel="3KM"
        activeColor="#34C759"
      />

      <View style={{ height: 40 }} />

      <ThemedView style={{ marginTop: "auto" }} />

      <CustomButton
        title="Continue"
        onPress={() => {
          router.push("/(auth)/login");
        }}
      />
    </AuthLayout>
  );
};

export default alertradius;

const styles = StyleSheet.create({});
