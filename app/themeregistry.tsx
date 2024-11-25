"use client";

// In order to properly apply theme to all components, need to create wrapper (in this case the themeregistry) since MaterialUI uses client-side rendering
// which can then be used in the layout.tsx 

// Material-UI’s ThemeProvider relies on React Context, which must be used in client-side rendering. Wrapping it in a client component (ThemeRegistry) ensures:
// It doesn’t violate server-side rendering rules.
// You avoid the "Server Actions must be async functions" error.

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../app/ui/theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
