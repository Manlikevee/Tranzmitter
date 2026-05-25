import {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useMemo } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../themed-view";

const BlankBottomSheetModal = forwardRef(
  (
    {
      children, // content passed into the sheet
      footerComponent, // footer passed as prop
      backgroundColor, // custom sheet background color
    },
    ref,
  ) => {
    const snapPoints = useMemo(() => ["30%", "45%", "50%", "65%"], []);

    // back-drop
    const renderBackdrop = (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.6}
      />
    );

    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: isDark ? "#0f0f0f" : "#fff",
        }}
        footerComponent={
          footerComponent
            ? (footerProps) => (
                <BottomSheetFooter {...footerProps}>
                  {footerComponent}
                </BottomSheetFooter>
              )
            : undefined
        }
      >
        <BottomSheetScrollView
          style={{ flex: 1, backgroundColor: "transparent" }}
        >
          <ThemedView style={styles.contentContainer}>{children}</ThemedView>
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "transparent",
    // flexGrow: 1,
  },
});

export default BlankBottomSheetModal;
