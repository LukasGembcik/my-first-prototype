import { createTheme, MantineColorsTuple } from "@mantine/core";
import { colors } from "../design-system/colors";

const primary: MantineColorsTuple = [
  "#eff6ff",
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  colors.primaryLight,
  colors.primary,
  colors.primaryDark,
  "#1e40af",
  "#1e3a8a",
];

export const appTheme = createTheme({
  primaryColor: "primary",
  colors: {
    primary,
  },
  fontFamily: "var(--font-sans), system-ui, sans-serif",
  defaultRadius: "md",
});
