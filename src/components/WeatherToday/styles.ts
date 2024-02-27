import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",

    backgroundColor: theme.colors.gray_700,

    borderRadius: 8,
    padding: 20,

    overflow: "hidden",
    resizeMode: "cover",
  },
  city: {
    color: theme.colors.gray_100,

    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  day: {
    color: theme.colors.gray_100,

    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
  },
  details: {
    flex: 1,
    justifyContent: "flex-end",

    marginBottom: 16,
  },
  temperature: {
    color: theme.colors.white,

    fontFamily: theme.fonts.extra_bold,
    fontSize: 48,
  },
  minMax: {
    color: theme.colors.white,

    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  weather: {
    color: theme.colors.white,

    fontFamily: theme.fonts.regular,
    fontSize: 14,

    textTransform: "capitalize",
  },
});
