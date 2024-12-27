import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Converter() {
  return (
    <>
      <View style={styles.body}>
        <Text>calculation part</Text>

        <View style={styles.input}>
          <TextInput mode="outlined" label="LKR" placeholder="Rs:" />
          <TextInput mode="outlined" label="USD" placeholder="USD:" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 2,
    color: "red",
  },
});
