import { createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    benefit: PaletteColorOptions;
  }

  interface PaletteOptions {
    benefit?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    benefit: true;
  }
}

export const theme = createTheme({
  palette: {
    benefit: {
      main: "#4caf50",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "benefit" },
          style: {
            backgroundColor: "#4caf50",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          },
        },
      ],
    },
  },
});

export default theme;
