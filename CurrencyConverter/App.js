import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Converter from "./components/Converter";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.head}>Currency Converter</Text>
        <Converter />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  head:{
    fontWeight: 'bold',
    fontSize:36
  }
});
