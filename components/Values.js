import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Values = () => {
  // 자바스크립트에서 html로 값을 전달하는 방법
  // js 정의한 변수를 JSX로 전달 할수 있다. JSX 내에서 `{변수명}`을 이용하면 된다.
  // string, number, object, function전달 가능

  const fruit = "apple";
  const durian = () => {
    alert("I am the best!!!");
  };

  // 그 반대로도 사용 가능하다. 즉, JSX에서 props로 변수를 넘기면 js에서 받아서 사용할 수 있다.
  const Banana = (user) => {
    return (
      <View>
        <Text>Hello, I am {user.name.firstName}</Text>
      </View>
    );
  };

  const Citrus = (props) => {
    return (
      <View>
        <Text>Hello, I'm {props.age} years old</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{fruit} is good for your health</Text>
      {/* {durian()} */}
      <Banana name={{ firstName: "sujin" }} />
      <Banana name={{ firstName: "roja" }} />
      <Citrus age={20} />
      <Image source={require("./../assets/images/annoying.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Values;
