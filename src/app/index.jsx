import { useRef, useState } from "react";

import { Dimensions, FlatList, View } from "react-native";

import { useRouter } from "expo-router";

import OnboardingSlide from "@/components/onboarding/OnboardingSlide";

import { onboardingSlides } from "@/constants/onboardingData";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const router = useRouter();

  const flatListRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      router.replace("/(auth)/login");
    }
  };

  const handleSkip = () => {
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={onboardingSlides}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width,
              flex: 1,
            }}
          >
            <OnboardingSlide
              item={item}
              currentIndex={currentIndex}
              totalSlides={onboardingSlides.length}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          </View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
    </View>
  );
}
