import { ITheme } from "@chakra-ui/core";

export default (theme: ITheme) => ({
  light: {
    color: theme.colors.gray[700],
    bg: theme.colors.gray[50],
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[500]
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400]
  }
});
