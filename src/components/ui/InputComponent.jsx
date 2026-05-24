import { Colors } from "@/constants/theme";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const InputComponent = ({
  inputState,
  setInputState,
  label,
  inputType = "text",
  placeholder,
  icontype,
  readonly = false,
  image,
  istextarea = false,
  isdropdown = false,
  keyboardType,
  textContentType,
  autoComplete,
  dataDetectorTypes,
  maxLength = 30,
  isfilter = false,
  istransparent = false,
  borderColor,
  borderRadius = 3,
  lightBorderColor = "#D9D9D9",
  darkBorderColor = "#3A3A3A",
  borderWidth = 1,
  bgColor,
  bgLightColor,
  bgDarkColor,
  textCase = "none",
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const colorScheme = useColorScheme();
  const isPassword = inputType === "password";

  const handlePasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
    inputRef.current?.focus();
  };

  const handleWrapperPress = () => {
    if (!readonly) {
      inputRef.current?.focus();
    }
  };

  const getKeyboardType = () => {
    if (keyboardType) return keyboardType;
    if (inputType === "email") return "email-address";
    if (inputType === "number") return "numeric";
    if (inputType === "phone") return "phone-pad";
    return "default";
  };

  const handleTextChange = (text) => {
    let value = text;

    switch (textCase) {
      case "lowercase":
        value = text.toLowerCase();
        break;
      case "uppercase":
        value = text.toUpperCase();
        break;
      case "capitalize":
        value = text.charAt(0).toUpperCase() + text.slice(1);
        break;
      case "words":
        value = text.replace(/\b\w/g, (char) => char.toUpperCase());
        break;
      default:
        break;
    }

    setInputState(value);
  };

  const focusedLightBorder = borderColor || "#E02A2E";
  const focusedDarkBorder = borderColor || "#E02A2E";

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

      <Pressable onPress={handleWrapperPress}>
        <ThemedView
          lightColor={
            istransparent ? "transparent" : bgColor || bgLightColor || "#fff"
          }
          darkColor={
            istransparent ? "transparent" : bgColor || bgDarkColor || "#2b2b2b"
          }
          borderWidth={borderWidth}
          lightBorderColor={isFocused ? focusedLightBorder : lightBorderColor}
          darkBorderColor={isFocused ? focusedDarkBorder : darkBorderColor}
          style={[styles.inputWrapper, readonly && styles.readOnly]}
          borderRadius={borderRadius || 0}
        >
          {icontype && !image && (
            <SimpleLineIcons
              name={icontype}
              size={18}
              color="#888"
              style={styles.icon}
            />
          )}

          {image && <Image source={image} style={styles.image} />}

          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              readonly && styles.readOnly,
              {
                color: Colors[colorScheme ?? "light"].text,
                height: istextarea ? 100 : undefined,
              },
            ]}
            value={inputState}
            onChangeText={handleTextChange}
            placeholder={placeholder || label}
            placeholderTextColor="#888"
            fontFamily="InstrumentSans_400Regular"
            secureTextEntry={isPassword && !isPasswordVisible}
            editable={!readonly}
            multiline={istextarea}
            numberOfLines={istextarea ? 5 : 1}
            textAlignVertical={istextarea ? "top" : "center"}
            keyboardType={getKeyboardType()}
            textContentType={textContentType}
            autoComplete={autoComplete}
            dataDetectorTypes={dataDetectorTypes}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoCapitalize={
              textCase === "words"
                ? "words"
                : textCase === "capitalize"
                  ? "sentences"
                  : "none"
            }
          />

          {isPassword && (
            <TouchableOpacity
              onPress={handlePasswordToggle}
              style={styles.iconButton}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          )}

          {isdropdown && (
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chevron-down-outline" size={20} color="#888" />
            </TouchableOpacity>
          )}

          {isfilter && (
            <TouchableOpacity
              style={{
                backgroundColor: "#13683C17",
                padding: 6,
                borderRadius: 4,
                marginLeft: 10,
              }}
            >
              <Ionicons name="options-outline" size={20} color="#007438" />
            </TouchableOpacity>
          )}
        </ThemedView>
      </Pressable>
    </View>
  );
};

export default InputComponent;

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
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    marginBottom: 4,
    paddingVertical: 1,
    minHeight: 54,
  },
  icon: {
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    minHeight: 47,
    fontSize: 13.5,
    borderRadius: 2,
    backgroundColor: "transparent",
  },
  iconButton: {
    marginLeft: 10,
  },
  readOnly: {
    opacity: 0.6,
  },
});
