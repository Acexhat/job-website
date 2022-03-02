import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "5%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 12.5%",
        flexWrap: "wrap",
        [theme.breakpoints.down(767)]: {
            height: "unset",
            marginTop: "2.5rem"
        },
        [theme.breakpoints.between(768, 1099)]: {
            height: "unset",
            marginTop: "2rem"
        },
        ['@media (max-height:600px)']: {
            marginTop: "2.5rem",
        }
    },
    tags: {
        display: "flex",
        flexGrow: "0.9",
        justifyContent: 'flex-start',
        alignItems: "center",
        fontSize: "13px",
        lineHeight: "24px",
        gap: "1rem",
        [theme.breakpoints.down(767)]: {
            flexWrap: "wrap",
            gap: "0.5rem"
        },
    },
    clearAll: {
        flexGrow: "0.1",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        textDecorationLine: "underline",
        fontSize: "13px",
        lineHeight: "24px",
        cursor: "pointer",
        color: "#5CA5A5",
        [theme.breakpoints.down(767)]: {
            display: "none"
        }
    },
    clearAllMob: {
        flexGrow: "0.1",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        textDecorationLine: "underline",
        fontSize: "13px",
        lineHeight: "24px",
        cursor: "pointer",
        color: "#5CA5A5",
        fontWeight: "700",
        [theme.breakpoints.up(767)]: {
            display: "none"
        }
    }
}))