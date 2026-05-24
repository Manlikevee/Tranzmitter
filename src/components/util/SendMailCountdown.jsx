import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

const SendMailCountdown = ({ email, countdown = 60, onResend }) => {
  const [timeLeft, setTimeLeft] = useState(countdown);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    if (seconds < 60) return `${seconds}s`;

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResend = async () => {
    if (timeLeft > 0 || isSending) return;

    setIsSending(true);

    try {
      await onResend?.();
      setTimeLeft(countdown);
    } finally {
      setIsSending(false);
    }
  };

  const canResend = timeLeft === 0 && !isSending;

  return (
    <View style={styles.container}>
      <View style={styles.resendRow}>
        <ThemedText
          fontSize={13}
          lineHeight={20}
          fontFamily="InstrumentSans_400Regular"
          lightColor="#3C3C4399"
          darkColor="#EBEBF5B2"
        >
          Didn’t get it?
        </ThemedText>

        <Pressable onPress={handleResend} disabled={!canResend}>
          <ThemedText
            fontSize={13}
            lineHeight={20}
            fontFamily="InstrumentSans_600SemiBold"
            lightColor={canResend ? "#000000" : "#3C3C4399"}
            darkColor={canResend ? "#fff" : "#EBEBF5B2"}
          >
            {isSending
              ? "Sending..."
              : canResend
                ? "Resend code"
                : `Retry in ${formatTime(timeLeft)}`}
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default SendMailCountdown;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },

  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
