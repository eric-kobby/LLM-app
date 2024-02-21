import { View, ImageSourcePropType } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated/";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type EmojiStickerProps = {
  imageSize: number;
  stickerSource?: ImageSourcePropType;
};

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: EmojiStickerProps) {
  const scaledImage = useSharedValue(imageSize);
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaledImage.value),
      height: withSpring(scaledImage.value),
    };
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaledImage.value !== imageSize * 2) {
        scaledImage.value = imageSize * 2;
      }
    });

  return (
    <View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </View>
  );
}
