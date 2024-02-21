import { ImageSourcePropType } from "react-native";
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
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaledImage = useSharedValue(imageSize);

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaledImage.value),
      height: withSpring(scaledImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaledImage.value !== imageSize * 2) {
        scaledImage.value = imageSize * 2;
      }
    });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
