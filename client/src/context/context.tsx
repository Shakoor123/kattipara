import * as React from "react";

export interface ThemeInfo {
  dark: boolean;
  setDark: (dark: boolean) => void;
  admin: boolean;
  setAdmin: (admin: boolean) => void;
}

export const ThemeContext = React.createContext<ThemeInfo>({
  dark: false,
  setDark: () => {},
  admin: false,
  setAdmin: () => {},
});
