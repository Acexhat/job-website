import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#5CA5A5",
        position: "sticky",
        top: "0",
        height: "15%",
        [theme.breakpoints.down(767)]: {
            height: "10%"
        },
    },
    svg_header: {
        [theme.breakpoints.down(767)]: {
            position: "absolute",
            height: "100%",
            width: "100%",
        },
        [theme.breakpoints.up(767)]: {
            position: "absolute",
            bottom: "0",
            width: "93%"
        },
    }
}))