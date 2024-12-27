import { StyleSheet, Text, View } from "react-native";

export default function Converter() {
  return (
    <>
      <View style={styles.body}>
        <Text>calculation part</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
