import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiFormControl-marginNormal": {
            margin: 0
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px"
        },
        position: "absolute",
        top: "11.5%",
        width: "75%",
        backgroundColor: "#FFFFFF",
        borderRadius: "5px",
        boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
        [theme.breakpoints.down(767)]: {
            top: "6.5%"
        }
    },
    auto_root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px"
        },
    },
    input_root: {
        '&::placeholder': {
            color: "#2B3939",
            opacity: "1 !important",
            fontSize: "16px",
            lineHeight: "20px",
            fontStyle: "normal",
            fontWeight: "bold",
        },
    },
    submit_btn: {
        color: "#C5C5C5",
        fontSize: "13px",
        lineHeight: "18px",
        paddingRight: "1rem",
        fontWeight: "550",
    },
    submit_btn_active: {
        cursor: "pointer",
        color: "#5CA5A5",
        fontSize: "13px",
        lineHeight: "18px",
        paddingRight: "1rem",
        fontWeight: "550"
    }
}))