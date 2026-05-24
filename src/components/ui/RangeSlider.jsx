import { Colors } from "@/constants/theme";
import Slider from "@react-native-community/slider";
import { useMemo, useState } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../themed-text";

const TRACK_HEIGHT = 26;
const THUMB_WIDTH = 28;
const THUMB_HEIGHT = 44;
const HORIZONTAL_PADDING = 18;
const TICK_COUNT = 28;

const RangeSlider = ({
  value = 1,
  setValue,
  min = 0.5,
  max = 3,
  step = 0.5,
  unit = "KM",
  minLabel = "500M",
  maxLabel = "3K\nM",
  activeColor = "#34C759",
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = Colors[colorScheme ?? "light"];
  const [sliderWidth, setSliderWidth] = useState(0);

  const progress = useMemo(() => {
    if (max === min) return 0;
    return Math.max(0, Math.min(1, (value - min) / (max - min)));
  }, [value, min, max]);

  const usableWidth = Math.max(sliderWidth - HORIZONTAL_PADDING * 2, 0);
  const progressWidth = usableWidth * progress;
  const thumbLeft = HORIZONTAL_PADDING + progressWidth - THUMB_WIDTH / 2;

  const ticks = Array.from({ length: TICK_COUNT }, (_, index) => {
    const tickProgress = index / (TICK_COUNT - 1);
    const isActive = tickProgress <= progress;

    return {
      id: index,
      isActive,
      opacity: isActive
        ? 1 - tickProgress * 0.45
        : isDark
          ? 0.16 + (1 - tickProgress) * 0.1
          : 0.18 + (1 - tickProgress) * 0.12,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.valueWrap}>
        <ThemedText
          fontFamily="Geist_700Bold"
          fontSize={62}
          style={styles.valueNumber}
          lightColor={theme.text}
          darkColor={theme.text}
        >
          {value}
        </ThemedText>

        <ThemedText
          fontFamily="Geist_700Bold"
          fontSize={26}
          style={styles.valueUnit}
          lightColor={theme.text}
          darkColor={theme.text}
        >
          {unit}
        </ThemedText>
      </View>

      <View
        onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
        style={[
          styles.sliderShell,
          {
            backgroundColor: isDark ? "#181818" : "#F7F7F7",
            borderColor: isDark ? "#2B2B2B" : "#ECECEC",
          },
        ]}
      >
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          <View
            style={[
              styles.track,
              {
                left: HORIZONTAL_PADDING,
                right: HORIZONTAL_PADDING,
                backgroundColor: isDark ? "#2F2F2F" : "#ECECEC",
              },
            ]}
          />

          <View
            style={[
              styles.activeTrack,
              {
                left: HORIZONTAL_PADDING,
                width: progressWidth,
                backgroundColor: activeColor,
              },
            ]}
          />

          {sliderWidth > 0 && (
            <View
              style={[
                styles.fakeThumb,
                {
                  left: Math.max(
                    HORIZONTAL_PADDING - THUMB_WIDTH / 2,
                    Math.min(
                      thumbLeft,
                      sliderWidth - HORIZONTAL_PADDING - THUMB_WIDTH / 2,
                    ),
                  ),
                  borderColor: activeColor,
                  backgroundColor: "#FFFFFF",
                },
              ]}
            />
          )}
        </View>

        <Slider
          style={styles.nativeSlider}
          minimumValue={min}
          maximumValue={max}
          step={step}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor="transparent"
        />
      </View>

      <View style={styles.bottomRow}>
        <ThemedText
          fontFamily="InstrumentSans_600SemiBold"
          fontSize={15}
          lightColor="#8E8E93"
          darkColor="#9A9AA0"
          style={styles.edgeLabel}
        >
          {minLabel}
        </ThemedText>

        <View style={styles.ticksWrap}>
          {ticks.map((tick) => (
            <View
              key={tick.id}
              style={[
                styles.tick,
                {
                  backgroundColor: activeColor,
                  opacity: tick.opacity,
                },
              ]}
            />
          ))}
        </View>

        <ThemedText
          fontFamily="InstrumentSans_600SemiBold"
          fontSize={15}
          lightColor="#3C3C4399"
          darkColor="#9A9AA0"
          style={[styles.edgeLabel, styles.rightEdgeLabel]}
        >
          {maxLabel}
        </ThemedText>
      </View>
    </View>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 16,
  },
  valueWrap: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 20,
    gap: 4,
  },
  valueNumber: {
    lineHeight: 68,
  },
  valueUnit: {
    lineHeight: 34,
    marginBottom: 8,
  },
  sliderShell: {
    height: 92,
    borderRadius: 28,
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 18,
    position: "relative",
    overflow: "hidden",
  },
  track: {
    position: "absolute",
    top: "50%",
    marginTop: -TRACK_HEIGHT / 2,
    height: TRACK_HEIGHT,
    borderRadius: 999,
  },
  activeTrack: {
    position: "absolute",
    top: "50%",
    marginTop: -TRACK_HEIGHT / 2,
    height: TRACK_HEIGHT,
    borderRadius: 999,
  },
  fakeThumb: {
    position: "absolute",
    top: "50%",
    marginTop: -THUMB_HEIGHT / 2,
    width: THUMB_WIDTH,
    height: THUMB_HEIGHT,
    borderRadius: 14,
    borderWidth: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  nativeSlider: {
    width: "100%",
    height: 92,
    opacity: 0.02,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 3,
  },
  edgeLabel: {
    width: 58,
  },
  rightEdgeLabel: {
    textAlign: "right",
  },
  ticksWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  tick: {
    width: 5,
    height: 15,
    borderRadius: 999,
  },
});
