import { Colors } from "@/constants/theme";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, useColorScheme, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const OtpInputComponent = ({
  value = "",
  setValue,
  length = 6,
  label,
  readonly = false,

  borderRadius = 3,
  borderWidth = 1,
  lightBorderColor = "#D9D9D9",
  darkBorderColor = "#3A3A3A",

  bgColor,
  bgLightColor,
  bgDarkColor,
  istransparent = false,
}) => {
  const colorScheme = useColorScheme();
  const inputsRef = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const getBoxValue = (index) => value[index] || "";

  const handleChange = (text, index) => {
    if (readonly) return;
    if (!/^\d*$/.test(text)) return;

    const chars = value.split("");
    chars[index] = text.slice(-1);
    const newValue = Array.from({ length }, (_, i) => chars[i] || "").join("");
    setValue(newValue);

    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (readonly) return;

    if (e.nativeEvent.key === "Backspace") {
      if (value[index]) {
        const chars = value.split("");
        chars[index] = "";
        setValue(Array.from({ length }, (_, i) => chars[i] || "").join(""));
        return;
      }

      if (!value[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();

        const chars = value.split("");
        chars[index - 1] = "";
        setValue(Array.from({ length }, (_, i) => chars[i] || "").join(""));
      }
    }
  };

  const handlePasteLikeInput = (text, index = 0) => {
    if (readonly) return;
    const pasted = text?.replace(/\D/g, "") || "";
    if (!pasted) return;

    const chars = value.split("");
    const sliced = pasted.slice(0, length - index);

    for (let i = 0; i < sliced.length; i++) {
      chars[index + i] = sliced[i];
    }

    const newValue = Array.from({ length }, (_, i) => chars[i] || "").join("");
    setValue(newValue);

    const nextFocus = Math.min(index + sliced.length, length - 1);
    inputsRef.current[nextFocus]?.focus();
  };

  useEffect(() => {
    if (!value) {
      inputsRef.current[0]?.focus();
    }
  }, []);

  const wrapperLightBg = istransparent
    ? "transparent"
    : bgColor || bgLightColor || "#fff";

  const wrapperDarkBg = istransparent
    ? "transparent"
    : bgColor || bgDarkColor || "#2b2b2b";

  return (
    <View style={styles.container}>
      {label && (
        <ThemedText
          fontFamily="Geist_600SemiBold"
          fontSize={15}
          style={styles.label}
          lightColor="#212121"
          darkColor="#FFFFFF"
        >
          {label}
        </ThemedText>
      )}

      <View style={styles.row}>
        {Array.from({ length }).map((_, index) => {
          const isFocused = focusedIndex === index;

          return (
            <React.Fragment key={index}>
              {index === 3 && (
                <View style={styles.dashWrapper}>
                  <ThemedText
                    fontFamily="Geist_500Medium"
                    fontSize={22}
                    lightColor="#8E8E93"
                    darkColor="#8E8E93"
                    style={styles.dash}
                  >
                    —
                  </ThemedText>
                </View>
              )}

              <ThemedView
                lightColor={wrapperLightBg}
                darkColor={wrapperDarkBg}
                borderWidth={borderWidth}
                lightBorderColor={isFocused ? "#FF383C" : lightBorderColor}
                darkBorderColor={isFocused ? "#FF383C" : darkBorderColor}
                borderRadius={borderRadius}
                style={styles.inputWrapper}
              >
                <TextInput
                  ref={(ref) => (inputsRef.current[index] = ref)}
                  style={[
                    styles.input,
                    {
                      color: Colors[colorScheme ?? "light"].text,
                    },
                  ]}
                  value={getBoxValue(index)}
                  onChangeText={(text) => {
                    if (text.length > 1) {
                      handlePasteLikeInput(text, index);
                    } else {
                      handleChange(text, index);
                    }
                  }}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  autoComplete="sms-otp"
                  maxLength={1}
                  editable={!readonly}
                  textAlign="center"
                  autoCapitalize="none"
                  selectTextOnFocus
                />
              </ThemedView>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default OtpInputComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    minHeight: 70,
    gap: 3,
  },
  label: {
    marginBottom: 4,
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputWrapper: {
    flex: 1,
    minHeight: 54,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: 4,
    marginHorizontal: 2,
  },
  input: {
    width: "100%",
    minHeight: 47,
    fontSize: 18,
    fontFamily: "InstrumentSans_400Regular",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  dashWrapper: {
    width: 24,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  dash: {
    lineHeight: 24,
  },
});
