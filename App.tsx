import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Buttons/Button";
import { useState } from "react";

const PlaceHolderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] =
    useState<ImageSourcePropType | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (result.canceled) return;
    const [image] = result.assets;
    setSelectedImage({
      uri: image.uri,
    });
    setShowAppOptions(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeHolderImageSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImage} />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
