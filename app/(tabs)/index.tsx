import InlineButtons from "@/components/InlineButtons";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/ImageViewer";
import { View, StyleSheet } from "react-native";

const PlaceholderImage = require("@/assets/images/images/background-image.png");

export default function Index() {
  const pickImage = async (shouldEdit = false) => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: shouldEdit,
      quality: 1,
    });
  };

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceholderImage} />
      <View style={styles.footerContainer}>
        <InlineButtons
          buttons={[
            {
              label: "Choose",
              onPress: () => pickImage(false),
              theme: "primary",
            },
            { label: "Edit", onPress: () => pickImage(true), theme: "primary" },
          ]}
        />

        <View style={{ height: 20 }} />
        <Button label="Upload" theme="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    marginTop: 20,
  },
});
