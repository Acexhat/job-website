import React from 'react';
import { useStyles } from './style';
import images from '../../images/index';

const Header = () => {
    const classes = useStyles();
    const HeaderSvg = images.BgHeaderDesktop;
    return (
        <div className={classes.root}>
            <HeaderSvg className={classes.svg_header} />
        </div>
    )
}

export default Header;