import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.scss';

const Link = (props) =>{
    return (
        <a className={applyStyles(props)} href={props.href}>{props.children}</a>
    )
};

const applyStyles = (props) => {
    return classNames(" ",
        {"uk-link-muted": props.muted},
        " "
    )
};

Link.propTypes = {
    /**  */
    logo: PropTypes.bool,
    /**  */
    text: PropTypes.bool,
    /** If you want the link to a apply a muted style */
    muted: PropTypes.bool,
    /** URL to be passed in */
    href: PropTypes.string,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Link.defaultProps = {
    logo: false,
    text: false,
    href: "",
    children: undefined
};

export default Link;
