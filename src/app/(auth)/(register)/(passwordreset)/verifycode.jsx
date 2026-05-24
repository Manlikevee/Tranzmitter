import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedView } from "@/components/themed-view";
import CustomButton from "@/components/ui/CustomButton";
import OtpInputComponent from "@/components/ui/OtpInputComponent";
import PageTitle from "@/components/ui/PageTitle";
import BackButton from "@/components/util/BackButton";
import SendMailCountdown from "@/components/util/SendMailCountdown";
import { router } from "expo-router";

const verifycode = () => {
  const [firstName, setFirstName] = useState("");
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
          title="Check your inbox"
          subtitle="ennyvix@gmail.com"
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      {/* <InputComponent
        {...inputProps}
        label="First Name"
        placeholder="Enter your first name"
        inputState={firstName}
        setInputState={setFirstName}
      /> */}

      <OtpInputComponent
        label="Enter code"
        value={otp}
        setValue={setOtp}
        length={6}
        lightBorderColor="#E5E7EB"
        darkBorderColor="#3A3A3A"
        bgLightColor="#fff"
        bgDarkColor="#2b2b2b"
      />

      <View style={{ height: 40 }} />
      <SendMailCountdown
        email="victor@email.com"
        countdown={90}
        onResend={async () => {
          await resendOtp();
        }}
      />

      <ThemedView style={{ marginTop: "auto" }} />
      <CustomButton
        title="Verify"
        onPress={() => {
          router.push("/(auth)/(register)/(passwordreset)/newpassword");
        }}
      />
    </AuthLayout>
  );
};

export default verifycode;

const styles = StyleSheet.create({
  loginText: {
    textAlign: "center",
    marginTop: 10,
  },
});
