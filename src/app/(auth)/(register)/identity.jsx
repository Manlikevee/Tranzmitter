import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedView } from "@/components/themed-view";
import CustomButton from "@/components/ui/CustomButton";
import InputComponent from "@/components/ui/InputComponent";
import PageTitle from "@/components/ui/PageTitle";
import BackButton from "@/components/util/BackButton";
import { router } from "expo-router";

const identity = () => {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
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
      Logo={() => <BackButton totalpages={4} currentpage={2} />}
      Header={() => (
        <PageTitle
          titleSize={14}
          subtitleSize={12}
          bottomgap={30}
          title="What's your Username?"
          nototp={true}
          subtitle="This will be your unique identifier on the platform."
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      <InputComponent
        {...inputProps}
        label="Username"
        placeholder="e.g tunde, Ngozi, Anonymous"
        inputState={username}
        setInputState={setUsername}
      />

      <View style={{ height: 40 }} />
      <ThemedView style={{ marginTop: "auto" }} />
      <CustomButton
        title="Verify"
        onPress={() => {
          router.push("/(auth)/(register)/location");
        }}
      />
    </AuthLayout>
  );
};

export default identity;

const styles = StyleSheet.create({});
