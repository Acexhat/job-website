import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        height: "85%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "hsl(180, 52%, 96%)",
        [theme.breakpoints.down(767)]: {
            height: "90%"
        },
    },
    jobFeild: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        margin: "1rem 0"
    },
    flexWrapper: {
        overflow: "auto",
        height: "90%",
        [theme.breakpoints.between(768, 1099)]: {
            height: "95%"
        }
    },
    flexWrapper_withoutTag: {
        overflow: "auto",
        height: "95%",
    },
}))