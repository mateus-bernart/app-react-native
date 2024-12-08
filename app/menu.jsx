import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Appearance } from "react-native";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
