import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 767,
            laptop: 1024,
            desktop: 1200,
        },
    },
    palette: {
        color: "red"
    }
})
export default theme;