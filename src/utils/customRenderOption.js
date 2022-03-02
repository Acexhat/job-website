import React from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { makeStyles } from "@material-ui/core";
import { addTag } from '../store/Actions/formActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: "1%",
        marginBottom: "0.25%",
        cursor: "pointer"
    },
    display_div: {
        cursor: "pointer",
    }
}))

const CustomRenderOption = ({ option, value }) => {
    const matches = match(option.key, value || "");
    const parts = parse(option.key, matches);
    const disp = useDispatch();
    const classes = useStyles();

    const handleOnClick = (index) => {
        disp(addTag(option.key));
    }

    const highlightStyle = {
        backgroundColor: "lightyellow",
        padding: "5px 2px",
    };

    return (
        <div className=
            {classes.root}>
            {parts.map((part, index) => (
                // <div className={classes.display_div} onClick={() => handleOnClick(index)}>
                <span onClick={handleOnClick} key={index} style={part.highlight ? highlightStyle : {}}>
                    {part.text}
                </span>
                // </div>
            ))
            }
        </div >
    );
};

export default CustomRenderOption;
