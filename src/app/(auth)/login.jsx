import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";

import { AuthLayout } from "@/components/AuthLayout";
import { ThemedText } from "@/components/themed-text";
import CustomButton from "@/components/ui/CustomButton";
import InputComponent from "@/components/ui/InputComponent";
import LogoComponent from "@/components/ui/LogoComponent";
import NoAccount from "@/components/ui/NoAccount";
import OrSeparator from "@/components/ui/OrSeparator";
import PageHeader from "@/components/ui/PageHeader";
import { SocialAuthButton } from "@/components/ui/SocialAuthButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout
      spacestart={50}
      showGradient={true}
      Logo={() => <LogoComponent width={60} height={60} />}
      Header={() => (
        <PageHeader
          titleSize={16}
          subtitleSize={13}
          title="Sign in"
          subtitle="Report incidents. Stay informed. Stay safe."
        />
      )}
      spacing={15}
      paddingHorizontal={15}
    >
      <InputComponent
        borderRadius={10}
        borderWidth={0.8}
        bgLightColor="#AAAAAA14"
        bgDarkColor="#7676802E"
        lightBorderColor="#AAAAAA14"
        darkBorderColor="#7676802E"
        label="Username"
        placeholder="Enter your username"
        inputState={username}
        setInputState={setUsername}
      />

      <InputComponent
        borderWidth={0.8}
        bgLightColor="#AAAAAA14"
        bgDarkColor="#7676802E"
        lightBorderColor="#AAAAAA14"
        darkBorderColor="#7676802E"
        label="Password"
        placeholder="Enter your password"
        inputState={password}
        setInputState={setPassword}
        inputType="password"
        borderRadius={10}
      />

      <Link
        href={"/(auth)/(register)/(passwordreset)"}
        style={styles.forgotpassword}
      >
        <ThemedText
          fontSize={15}
          lineHeight={20}
          fontFamily="Geist_600SemiBold"
          lightColor="#3C3C4399"
          darkColor="#EBEBF5B2"
          style={styles.forgotpasswordtext}
        >
          Forgot Password?
        </ThemedText>
      </Link>

      <CustomButton
        title="Sign in"
        onPress={() => {
          router.replace("/(home)");
        }}
      />

      <NoAccount />

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

export default Login;

const styles = StyleSheet.create({
  forgotpassword: {
    // textAlign: "right",
    marginTop: -10,
    fontSize: 14,
    lineHeight: 20,
  },
  forgotpasswordtext: {
    fontFamily: "Geist_400Regular",
    textDecorationLine: "underline",
    // textDecorationColor: "#3C3C4399",
  },
});
