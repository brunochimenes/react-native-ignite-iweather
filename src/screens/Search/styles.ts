import { theme } from "@styles/theme";
import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    alignItems: "center",

    padding: 24,
    paddingTop: 48,
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",

    paddingBottom: 56,
  },
  title: {
    color: theme.colors.white,

    fontFamily: theme.fonts.bold,
    fontSize: 20,

    textAlign: "center",
  },
  brand: {
    color: theme.colors.blue_light,
  },
  subtitle: {
    color: theme.colors.gray_200,

    fontFamily: theme.fonts.regular,
    fontSize: 14,

    marginTop: 4,
    marginBottom: 32,

    textAlign: "center",
  },
  scroll: {
    backgroundColor: theme.colors.gray_900,
  },
});
