import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "8rem",
        width: "75%",
        borderRadius: "5px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
        [theme.breakpoints.between(400, 767)]: {
            height: "14rem",
            flexDirection: "column",
            alignItems: "flex-start"
        },
        [theme.breakpoints.down(525)]: {
            height: "20rem",
            flexDirection: "column",
            alignItems: "flex-start"
        }
    },
    icon_div: {
        width: "10%",
        height: "100%",
        // border: "1px solid red",
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "center",
        [theme.breakpoints.between(767, 1000)]: {
            width: "15%"
        },
        [theme.breakpoints.down(767)]: {
            justifyContent: "unset",
            height: "50%",
            paddingLeft: "3%"
        },
    },
    imgChange: {
        [theme.breakpoints.between(767, 1000)]: {
            height: "55%"
        },
        [theme.breakpoints.between(1001, 1200)]: {
            height: "55%"
        },
        [theme.breakpoints.between(400, 767)]: {
            height: "80%"
        },
        [theme.breakpoints.down(400)]: {
            height: "75%"
        },
    },
    icon: {
        height: "3rem",
        width: "3rem"
    },
    details_div: {
        width: "90%",
        height: "100%",
        // border: "1px solid green",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down("1000")]: {
            flexDirection: "column",
            flexWrap: "unset",
            alignItems: "flex-start",
        }
    },
    company_details: {
        width: "50%",
        height: "100%",
        [theme.breakpoints.down("700")]: {
            width: "100%"
        },
        [theme.breakpoints.between(325, 525)]: {
            height: "50%"
        },
        // border: "1px solid orange"
    },
    company_details_inner: {
        // paddingLeft: "5%",
        padding: "4% 0 4% 5%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "0.5rem",
        [theme.breakpoints.down(1000)]: {
            gap: "0"
        }
    },
    tag_holder: {
        width: "50%",
        height: "100%",
        [theme.breakpoints.down(500)]: {
            width: "100%",
            height: "50%"
        },
    },
    tag_holder_inner: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%",
        gap: "0.5rem",
        [theme.breakpoints.up(767)]: {
            paddingRight: "2rem"
        },
        [theme.breakpoints.down(1000)]: {
            justifyContent: "flex-start",
            paddingLeft: "5%",
            paddingRight: "0"
        },
        [theme.breakpoints.between(325, 525)]: {
            height: "50%"
        },
        [theme.breakpoints.down(525)]: {
            justifyContent: "flex-start",
            paddingLeft: "5%",
            paddingRight: "0",
            flexWrap: "wrap"
        }
    },
    header: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        color: "#5CA5A5",
        gap: "0.5rem",
        fontSize: "14px",
        lineHeight: "16px",
        fontWeight: "600"
    },
    meta_div: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        color: "#7C8F8F",
        fontWeight: "400",
        fontSize: "0.8rem",
        lineHeight: "1.5rem",
    },
    position: {
        color: "#2B3939",
        fontSize: "18px",
        lineHeight: "24px",
        fontWeight: "659",

    }
}))