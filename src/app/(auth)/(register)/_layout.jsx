import { Stack } from "expo-router";

const RegisterLayout = () => {
  return (
    <Stack>
      {/* Step 1: Basic details */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Step 2: Phone / Email Verification */}
      <Stack.Screen name="verify" options={{ headerShown: false }} />
      {/* Step 4: Identity Verification (Optional KYC) */}
      <Stack.Screen name="identity" options={{ headerShown: false }} />
      {/* Step 7: Summary & Confirmation */}
      <Stack.Screen name="location" options={{ headerShown: false }} />

      <Stack.Screen name="alertradius" options={{ headerShown: false }} />

      <Stack.Screen name="(passwordreset)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RegisterLayout;
