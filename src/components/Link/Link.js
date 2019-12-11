import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.scss';
import applyAll from "../Common/applyAll";
import applyTransform from "../Common/applyTransform";
import applyPosition from "../Common/applyPosition";

const Link = (props) => {
    if (props.marker) {
        return (
            <a className={
                applyStyles(props) +
                applyTransform(props) +
                applyPosition(props) +
                applyAll(props)
            } href={props.href} uk-marker="" style={{left: props.left, top: props.top}}>{props.children}</a>
        )
    } else {
        return (
            <a className={
                applyStyles(props) +
                applyTransform(props) +
                applyAll(props)
            } href={props.href}>{props.children}</a>
        )
    }
};

const applyStyles = (props) => {
    return classNames(" ",
        {"uk-logo": props.logo},
        {"uk-link-text": props.text},
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
    /**  */
    left: PropTypes.string,
    /**  */
    top: PropTypes.string,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Link.defaultProps = {
    logo: false,
    text: false,
    muted: false,
    href: "",
    left: "",
    top: "",
    children: undefined
};

export default Link;
