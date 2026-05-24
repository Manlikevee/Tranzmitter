import { View, type ViewProps, useColorScheme } from "react-native";

import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;

  borderWidth?: number;
  lightBorderColor?: string;
  darkBorderColor?: string;

  borderRadius?: number;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type = "background",

  borderWidth = 0,
  lightBorderColor,
  darkBorderColor,

  borderRadius,

  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const backgroundColor =
    colorScheme === "dark"
      ? (darkColor ?? theme[type])
      : (lightColor ?? theme[type]);

  const borderColor =
    colorScheme === "dark"
      ? (darkBorderColor ?? "#2A2A2A")
      : (lightBorderColor ?? "#E5E5E5");
  return (
    <View
      style={[
        {
          backgroundColor,

          borderWidth: borderWidth || undefined,
          borderColor: borderWidth ? borderColor : "red",

          borderRadius: borderRadius || 0,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
