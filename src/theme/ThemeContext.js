import { createContext, useContext, useMemo, useState } from 'react';
import { darkColors, lightColors } from './colors';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(
    () => ({
      isDark,
      colors: isDark ? darkColors : lightColors,
      toggleTheme: () => setIsDark((atual) => !atual),
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme precisa estar dentro de ThemeProvider');
  return ctx;
}
