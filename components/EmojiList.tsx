import { useState } from "react";
import { FlatList, Platform, Pressable, Image, StyleSheet } from "react-native";

type EmojiListProps = {
  onSelect: (item: unknown) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onCloseModal, onSelect }: EmojiListProps) {
  const [emojis] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ]);

  const onPress = (emoji: unknown) => {
    onSelect(emoji);
    onCloseModal();
  };  

  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emojis}
      renderItem={({ item: emoji, index }) => (
        <Pressable key={index} onPress={() => onPress(emoji)}>
          <Image source={emoji} style={styles.image} />
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});