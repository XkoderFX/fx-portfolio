import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },

    palette: {
        primary: {
            main: "#3333ff",
        },

        secondary: {
            main: "#efefef",
        },
    },
});

export default theme;
