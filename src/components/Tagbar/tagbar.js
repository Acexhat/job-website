import React from 'react';
import { useStyles } from './style';
import Tags from '../../atomic/tags';
import { setData } from '../../store/Actions/formActions';
import { useDispatch } from 'react-redux';
import { clearAllTag } from '../../store/Actions/formActions';

const ClearAllcomp = (props) => {
    const classes = useStyles();
    const disp = useDispatch();
    const onClickHandle = () => {
        disp(clearAllTag());
    }
    return (
        <div
            className={props.className}
            onClick={onClickHandle}
        >Clear all</div>
    )
}

const TagBar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.tags}>
                {props?.list.map((elem) => {
                    return (
                        <Tags tagName={elem} />
                    )
                })}
                <ClearAllcomp className={classes.clearAllMob} />
            </div>
            <ClearAllcomp className={classes.clearAll} />
        </div>
    )
}

export default TagBar;