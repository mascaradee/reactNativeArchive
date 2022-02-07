import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import EmojiBoard from 'react-native-emoji-board'

export default () => {
  const [show, setShow] = useState(false);
  const onClick = emoji => {
      console.log(emoji);
  };

  return (
    <>
        <TouchableOpacity onPress={() => setShow(!show)}>
            <Text>click here</Text>
        </TouchableOpacity>
        <EmojiBoard showBoard={show} onClick={onClick} />
    </>
);

}