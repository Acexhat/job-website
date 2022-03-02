import React from 'react';
import { useStyles } from './style';
import images from '../../images/index';
import TagWithoutCross from '../../atomic/tagWithoutCross';
import Chip from '../../atomic/Chip';
import ovalIcon from '../../images/Oval.svg';

const JobCard = (props) => {
    const classes = useStyles();
    const iconSrc = images[props.data.iconName]

    return (
        <div className={classes.root}>
            <div className={classes.icon_div}>
                <img className={classes.imgChange} src={iconSrc} />
            </div>
            <div className={classes.details_div}>
                <div className={classes.company_details}>
                    <div className={classes.company_details_inner}>
                        <div className={classes.header}>
                            <span>{props.data.company}</span>
                            {props?.data?.new ? <Chip tagName={"NEW!"} style={{ backgroundColor: "#5CA5A5" }} /> : null}
                            {props?.data?.featured ? <Chip tagName={"FEATURED"} style={{ backgroundColor: "#2B3939" }} /> : null}
                        </div>
                        <div className={classes.position}>
                            {props?.data?.position}
                        </div>
                        <div className={classes.meta_div}>
                            {props?.data?.postedAt}
                            <img src={ovalIcon} />
                            {props?.data?.type}
                            <img src={ovalIcon} />
                            {props?.data?.location}
                        </div>
                    </div>
                </div>
                <div className={classes.tag_holder}>
                    <div className={classes.tag_holder_inner}>
                        {props.data.tags?.map((elem) => {
                            return <TagWithoutCross tagName={elem} />
                        })}
                        <TagWithoutCross tagName={props.data?.role} />
                        <TagWithoutCross tagName={props.data?.level} />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default JobCard;