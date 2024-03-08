import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';

interface ColorTokens {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

interface ThemeTokens {
    primary: ColorTokens;
    secondary: ColorTokens;
    black: ColorTokens;
    white: ColorTokens;
    beige: ColorTokens;
    negative: ColorTokens;
    sucess: ColorTokens;
    warning: ColorTokens;
}

interface CustomPaletteMode {
    mode: "dark" | "light"; // Modificado para corresponder à definição esperada
    dark: string;
    light: string;
}


export const tokens = (mode: CustomPaletteMode["mode"]): ThemeTokens => ({
    ...(mode === "dark"? {
        primary: {
            100: "#262d33",
            200: "#4c5a66",
            300: "#718698",
            400: "#97b3cb",
            500: "#bde0fe",
            600: "#cae6fe",
            700: "#d7ecfe",
            800: "#e5f3ff",
            900: "#f2f9ff",
        },
        secondary: {
            100: "#332329",
            200: "#664652",
            300: "#99697a",
            400: "#cc8ca3",
            500: "#ffafcc",
            600: "#ffbfd6",
            700: "#ffcfe0",
            800: "#ffdfeb",
            900: "#ffeff5",
        },
  
        black: {
          100: "#070707",
          200: "#0e0e0e",
          300: "#161615",
          400: "#1d1d1c",
          500: "#242423",
          600: "#50504f",
          700: "#7c7c7b",
          800: "#a7a7a7",
          900: "#d3d3d3",

        },
        
        white: {
            100: "#333333",
            200: "#666666",
            300: "#989898",
            400: "#cbcbcb",
            500: "#fefefe",
            600: "#fefefe",
            700: "#fefefe",
            800: "#ffffff",
            900: "#ffffff",
        },
        
        beige: {
            100: "#322b28",
            200: "#635751",
            300: "#958279",
            400: "#c6aea2",
            500: "#f8d9ca",
            600: "#f9e1d5",
            700: "#fbe8df",
            800: "#fcf0ea",
            900: "#fef7f4",
        },
        negative: {
            100: "#27080c",
            200: "#4f1018",
            300: "#761825",
            400: "#9e2031",
            500: "#c5283d",
            600: "#d15364",
            700: "#dc7e8b",
            800: "#e8a9b1",
            900: "#f3d4d8",
        },
        sucess: {
            100: "#252b28",
            200: "#4a564f",
            300: "#708277",
            400: "#95ad9e",
            500: "#bad8c6",
            600: "#c8e0d1",
            700: "#d6e8dd",
            800: "#e3efe8",
            900: "#f1f7f4",
        },
        warning: {
            100: "#312912",
            200: "#625125",
            300: "#937a37",
            400: "#c4a24a",
            500: "#f5cb5c",
            600: "#f7d57d",
            700: "#f9e09d",
            800: "#fbeabe",
            900: "#fdf5de",
        }
    }:{
        primary: {
            100: "#f2f9ff",
            200: "#e5f3ff",
            300: "#d7ecfe",
            400: "#cae6fe",
            500: "#bde0fe",
            600: "#97b3cb",
            700: "#718698",
            800: "#4c5a66",
            900: "#262d33",
        },
        secondary: {
            100: "#ffeff5",
            200: "#ffdfeb",
            300: "#ffcfe0",
            400: "#ffbfd6",
            500: "#ffafcc",
            600: "#cc8ca3",
            700: "#99697a",
            800: "#664652",
            900: "#332329",
        },
        black: {
            100: "#d3d3d3",
            200: "#a7a7a7",
            300: "#7c7c7b",
            400: "#50504f",
            500: "#242423",
            600: "#1d1d1c",
            700: "#161615",
            800: "#0e0e0e",
            900: "#070707"
  
          },
        
        white: {
            100: "#ffffff",
            200: "#ffffff",
            300: "#fefefe",
            400: "#fefefe",
            500: "#fefefe",
            600: "#cbcbcb",
            700: "#989898",
            800: "#666666",
            900: "#333333",
        },
        
        beige: {
            100: "#fef7f4",
            200: "#fcf0ea",
            300: "#fbe8df",
            400: "#f9e1d5",
            500: "#f8d9ca",
            600: "#c6aea2",
            700: "#958279",
            800: "#635751",
            900: "#322b28",
        },
        negative: {
            100: "#f3d4d8",
            200: "#e8a9b1",
            300: "#dc7e8b",
            400: "#d15364",
            500: "#c5283d",
            600: "#9e2031",
            700: "#761825",
            800: "#4f1018",
            900: "#27080c",
        },
        sucess: {
            100: "#f1f7f4",
            200: "#e3efe8",
            300: "#d6e8dd",
            400: "#c8e0d1",
            500: "#bad8c6",
            600: "#95ad9e",
            700: "#708277",
            800: "#4a564f",
            900: "#252b28",
        },
        warning: {
            100: "#fdf5de",
            200: "#fbeabe",
            300: "#f9e09d",
            400: "#f7d57d",
            500: "#f5cb5c",
            600: "#c4a24a",
            700: "#937a37",
            800: "#625125",
            900: "#312912",
        }
    })
});

interface ThemeSettings {
    palette: {
        mode: CustomPaletteMode["mode"];
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        neutral: {
            dark: string;
            main: string;
            light: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        h1: {
            fontFamily: string;
            fontSize: number;
        };
        h2: {
            fontFamily: string;
            fontSize: number;
        };
        h3: {
            fontFamily: string;
            fontSize: number;
        };
    };
}

export const themeSettings = (mode: CustomPaletteMode["mode"]): ThemeSettings => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.black[700],
                        main: colors.black[500],
                        light: colors.black[100],
                    },
                    background: {
                        primary: colors.primary[500],
                        secondary: colors.secondary[500],
                        tertiary: colors.warning[500],
                    }
                } : {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.black[700],
                        main: colors.black[500],
                        light: colors.black[100],
                    },
                    background: {
                        primary: colors.primary[500],
                        secondary: colors.secondary[500],
                        tertiary: colors.warning[500],
                    }
                }),
        },
        typography: {
            fontFamily: ['Handlee', 'cursive'].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ['Handlee', 'cursive'].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Handlee', 'cursive'].join(","),
                fontSize: 40,
            },
            h3: {
                fontFamily: ['Handlee', 'cursive'].join(","),
                fontSize: 40,
            }
        },
    }
}

interface ColorModeContextType {
    toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => {}
});

export const useMode = (): [any, ColorModeContextType] => {
    const [mode, setMode] = useState<CustomPaletteMode["mode"]>('dark');

    const colorMode: ColorModeContextType = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev: string) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );
// @ts-ignore comment 
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}
