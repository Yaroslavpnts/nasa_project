import { PaletteColorOptions, PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    mainTextColor?: React.CSSProperties['color'];
    errorColor?: React.CSSProperties['color'];
  }

  interface PaletteOptions {
    mainTextColor?: PaletteColorOptions;
    errorColor?: PaletteColorOptions;
  }

  interface Palette {
    mainTextColor: PaletteColor;
    errorColor: PaletteColor;
  }
}
