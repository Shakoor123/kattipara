import * as React from "react";

export interface ThemeInfo {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export const ThemeContext = React.createContext<ThemeInfo>({
  dark: false,
  setDark: () => {},
});
