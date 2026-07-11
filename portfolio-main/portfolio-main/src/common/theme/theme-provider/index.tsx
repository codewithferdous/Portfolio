'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // ✅ Always open in dark mode
      enableSystem={false} // ✅ Ignore system theme, only use toggle
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
