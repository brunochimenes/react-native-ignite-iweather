import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 56,

    backgroundColor: theme.colors.gray_600,

    fontFamily: theme.fonts.regular,
    fontSize: 16,

    borderRadius: 8,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,

    color: theme.colors.white,
  },
});
