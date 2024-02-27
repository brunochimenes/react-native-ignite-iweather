import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: theme.colors.gray_800,

    borderRadius: 12,
    padding: 12,
  },
});
