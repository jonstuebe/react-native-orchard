import { useColorScheme } from "react-native";
import { tokens } from "../tokens";

export function useTheme() {
  const mode = useColorScheme() ?? "dark";

  return {
    ...tokens,
    mode,
    isLightMode: mode === "light",
    isDarkMode: mode === "dark",
    colors: Object.fromEntries(
      Object.entries(tokens.colors).map(([key, value]) => {
        return [key, value[mode]];
      })
    ) as any as {
      [key in keyof typeof tokens.colors]: string;
    },
  };
}
