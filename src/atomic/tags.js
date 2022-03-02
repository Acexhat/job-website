import React from 'react';
import { makeStyles } from '@material-ui/core';
import images from '../images/index';
import { useDispatch } from 'react-redux';
import { removeTag } from '../store/Actions/formActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        borderRadius: "5px",
    },
    txt: {
        backgroundColor: "#FFFFFF",
        color: "#5CA5A5",
        fontWeight:"700",
        padding: "0.2rem 0.4rem",
        borderRadius: "5px",

    },
    cross: {
        backgroundColor: "#5CA5A5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px 4px 4px 0px",
        cursor: "pointer",
        width: "1.8rem ",
    },
    cross_hover: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px 4px 4px 0px",
        cursor: "pointer",
        width: "1.8rem ",
    }
}))

const Tags = (props) => {
    const classes = useStyles();
    const disp = useDispatch();
    const [hovered, setHovered] = React.useState(false);
    const Cross = images.Cross;
    return (
        <div className={classes.root}>
            <span className={classes.txt}>{props.tagName}</span>
            <div className={hovered ? classes.cross_hover : classes.cross}
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => disp(removeTag(props.tagName))}>
                <Cross />
            </div>
        </div >
    )
}

export default Tags;