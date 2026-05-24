import { useState } from "react";
import { StyleSheet } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import CustomButton from "@/components/ui/CustomButton";
import InputComponent from "@/components/ui/InputComponent";
import NoAccount from "@/components/ui/NoAccount";
import OrSeparator from "@/components/ui/OrSeparator";
import PageTitle from "@/components/ui/PageTitle";
import { SocialAuthButton } from "@/components/ui/SocialAuthButton";
import BackButton from "@/components/util/BackButton";
import { PasswordRules } from "@/components/util/PasswordRules";
import { router } from "expo-router";

const index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [referral, setReferral] = useState("");

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
      Logo={() => <BackButton />}
      Header={() => (
        <PageTitle
          titleSize={14}
          subtitleSize={13}
          bottomgap={30}
          title="Create account"
          // subtitle="Join your community. Stay alert. Report incidents in seconds."
        />
      )}
      spacing={14}
      paddingHorizontal={15}
    >
      <InputComponent
        {...inputProps}
        label="First Name"
        placeholder="Enter your first name"
        inputState={firstName}
        setInputState={setFirstName}
      />

      <InputComponent
        {...inputProps}
        label="Last Name"
        placeholder="Enter your last name"
        inputState={lastName}
        setInputState={setLastName}
      />

      <InputComponent
        {...inputProps}
        label="Email"
        placeholder="Enter your email"
        inputState={email}
        setInputState={setEmail}
        keyboardType="email-address"
      />

      <InputComponent
        {...inputProps}
        label="Phone Number"
        placeholder="Enter your phone number"
        inputState={phone}
        setInputState={setPhone}
        keyboardType="phone-pad"
      />

      <InputComponent
        {...inputProps}
        label="Password"
        placeholder="Create a password"
        inputState={password}
        setInputState={setPassword}
        inputType="password"
      />

      {/* <InputComponent
        {...inputProps}
        label="Referral Code (Optional)"
        placeholder="Enter referral code"
        inputState={referral}
        setInputState={setReferral}
      /> */}
      <PasswordRules password={password} />
      <CustomButton
        title="Create Account"
        onPress={() => {
          router.push("/(auth)/(register)/verify");
        }}
      />

      <NoAccount
        text="Already have an account?"
        actionText="Sign in"
        href="/(auth)/login"
      />

      <OrSeparator text="Or" />

      <SocialAuthButton
        icon={require("@/assets/google.png")}
        text="Continue with Google"
      />

      <SocialAuthButton
        icon={require("@/assets/apple.png")}
        text="Continue with Apple"
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
