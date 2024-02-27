import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    position: "relative",
    zIndex: 1,
  },
  options: {
    borderRadius: 8,

    overflow: "hidden",
    position: "absolute",
    top: 64,
    right: 0,
    left: 0,
  },
  title: {
    backgroundColor: theme.colors.gray_500,
    color: theme.colors.gray_100,

    fontFamily: theme.fonts.regular,
    fontSize: 16,

    borderBottomColor: theme.colors.gray_600,
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
