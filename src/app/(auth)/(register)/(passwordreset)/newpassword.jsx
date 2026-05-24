import { useState } from "react";
import { StyleSheet } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedView } from "@/components/themed-view";
import CustomButton from "@/components/ui/CustomButton";
import InputComponent from "@/components/ui/InputComponent";
import PageTitle from "@/components/ui/PageTitle";
import BackButton from "@/components/util/BackButton";
import { PasswordRules } from "@/components/util/PasswordRules";
import { router } from "expo-router";

const newpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          title="Create New Password"
          subtitle="Enter your new password"
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      <InputComponent
        {...inputProps}
        label="New Password"
        placeholder="Enter your new password"
        inputState={newPassword}
        setInputState={setNewPassword}
        inputType="password"
      />

      <InputComponent
        {...inputProps}
        label="Confirm Password"
        placeholder="Confirm your new password"
        inputState={confirmPassword}
        setInputState={setConfirmPassword}
        inputType="password"
      />

      <PasswordRules password={newPassword || confirmPassword} />

      <ThemedView style={{ marginTop: "auto" }} />
      <CustomButton
        title="Reset Password"
        onPress={() => {
          router.push("/(auth)/login");
        }}
      />
    </AuthLayout>
  );
};

export default newpassword;

const styles = StyleSheet.create({
  loginText: {
    textAlign: "center",
    marginTop: 10,
  },
});
