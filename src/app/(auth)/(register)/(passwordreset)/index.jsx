import { useState } from "react";
import { StyleSheet } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedView } from "@/components/themed-view";
import CustomButton from "@/components/ui/CustomButton";
import InputComponent from "@/components/ui/InputComponent";
import PageTitle from "@/components/ui/PageTitle";
import BackButton from "@/components/util/BackButton";
import { router } from "expo-router";

const index = () => {
  const [email, setEmail] = useState("");
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
      Logo={() => <BackButton totalpages={4} currentpage={1} />}
      Header={() => (
        <PageTitle
          titleSize={14}
          subtitleSize={12}
          bottomgap={30}
          title="Password Reset"
          subtitle="Enter your email to receive a verification code"
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      <InputComponent
        {...inputProps}
        label="Email"
        placeholder="Enter your Email"
        inputState={email}
        setInputState={setEmail}
      />

      {/* <View style={{ height: 40 }} />
      <SendMailCountdown
        email="victor@email.com"
        countdown={90}
        onResend={async () => {
          await resendOtp();
        }}
      /> */}

      <ThemedView style={{ marginTop: "auto" }} />
      <CustomButton
        title="Send Code"
        onPress={() => {
          router.push("/(auth)/(register)/(passwordreset)/verifycode");
        }}
      />
    </AuthLayout>
  );
};

export default index;

const styles = StyleSheet.create({
  loginText: {
    textAlign: "center",
    marginTop: 10,
  },
});
