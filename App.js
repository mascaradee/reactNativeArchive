import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Values from "./components/Values";
import Emoji from "./components/Emoji";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        {/* <Text style={styles.h1}>값 전달하는 방법</Text>
        <Values /> */}
        <Text style={styles.h1}>이모지 키보드 쓰는 법</Text>
        <Emoji />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold"
  },

});
