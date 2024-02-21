import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type ImageViewerProps = {
  placeHolderImageSource: ImageSourcePropType;
  selectedImage: ImageSourcePropType | null;
};

export default function ImageViewer({
  placeHolderImageSource,
  selectedImage,
}: ImageViewerProps) {
  return (
    <Image
      source={selectedImage || placeHolderImageSource}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
