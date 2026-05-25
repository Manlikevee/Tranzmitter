import { Stack } from "expo-router";

const AlertsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="create" options={{ headerShown: false }} />

      <Stack.Screen name="edit/[id]" options={{ headerShown: false }} />

      <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AlertsLayout;
