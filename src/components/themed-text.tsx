import {
  Platform,
  StyleSheet,
  Text,
  type TextProps,
  useColorScheme,
} from "react-native";

import { Fonts, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "small"
    | "smallBold"
    | "subtitle"
    | "link"
    | "linkPrimary"
    | "code";

  themeColor?: ThemeColor;
  lineHeight?: number;
  lightColor?: string;
  darkColor?: string;
  textDecorationColorlight?: string;
  textDecorationColordark?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: any;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
};

export function ThemedText({
  style,
  type = "default",
  themeColor,

  lightColor,
  darkColor,
  lineHeight,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  textDecorationColorlight,
  textDecorationColordark,

  ...rest
}: ThemedTextProps) {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const color =
    lightColor || darkColor
      ? colorScheme === "dark"
        ? (darkColor ?? lightColor)
        : (lightColor ?? darkColor)
      : theme[themeColor ?? "text"];
  const textDecorationColor =
    textDecorationColorlight || textDecorationColordark
      ? colorScheme === "dark"
        ? (textDecorationColordark ?? textDecorationColorlight)
        : (textDecorationColorlight ?? textDecorationColordark)
      : undefined;
  return (
    <Text
      style={[
        { color },

        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "small" && styles.small,
        type === "smallBold" && styles.smallBold,
        type === "subtitle" && styles.subtitle,
        type === "link" && styles.link,
        type === "linkPrimary" && styles.linkPrimary,
        type === "code" && styles.code,
        lineHeight ? { lineHeight } : undefined,
        fontFamily ? { fontFamily } : undefined,
        fontSize ? { fontSize } : undefined,
        fontWeight ? { fontWeight } : undefined,
        textAlign ? { textAlign } : undefined,
        textDecorationColor ? { textDecorationColor } : undefined,

        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },

  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },

  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },

  title: {
    fontSize: 48,
    fontWeight: "700",
    lineHeight: 52,
  },

  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: "600",
  },

  link: {
    fontSize: 14,
    lineHeight: 30,
  },

  linkPrimary: {
    fontSize: 14,
    lineHeight: 30,
    color: "#3c87f7",
  },

  code: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    fontWeight: Platform.select({ android: "700" }) ?? "500",
  },
});
