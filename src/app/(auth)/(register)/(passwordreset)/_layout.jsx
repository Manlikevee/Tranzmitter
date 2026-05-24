import { Stack } from "expo-router";

const PasswordResetLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="verifycode" options={{ headerShown: false }} />
      <Stack.Screen name="newpassword" options={{ headerShown: false }} />
      <Stack.Screen name="success" options={{ headerShown: false }} />
      <Stack.Screen name="forgotpassword" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PasswordResetLayout;
