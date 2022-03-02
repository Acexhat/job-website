import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addTag } from '../store/Actions/formActions';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        borderRadius: "4px",
        backgroundColor: "#EFF6F6",
    },
    txt: {
        color: "#5CA5A5",
        padding: "0.2rem 0.75rem",
        fontSize: "13px",
        lineHeight: "24px",
        fontWeight: "bold",
        fontStyle: "normal",
        "&:hover": {
            backgroundColor: "#5CA5A5",
            color: "#FFFFFF",
            borderRadius: "4px",
            cursor: "pointer"
        }
    }
}))

const TagWithoutCross = (props) => {
    const classes = useStyles();
    const [hovered, setHovered] = React.useState(false);
    const disp = useDispatch();

    const handleTagApply = (value) => {
        disp(addTag(value))
    }
    return (
        <div onClick={() => handleTagApply(props.tagName)} className={classes.root}>
            <span className={classes.txt}>{props.tagName}</span>
        </div >
    )
}

export default TagWithoutCross;