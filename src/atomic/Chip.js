import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    txt: {
        color: "#FFFFFF",
        padding: "0.2rem 0.4rem",
        borderRadius: "2rem",
        fontSize:"11px",
        lineHeight:"14px",
        textAlign:"center"
    },
}))

const Chip = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span className={classes.txt} style={props.style}>{props.tagName}</span>
        </div >
    )
}

export default Chip;