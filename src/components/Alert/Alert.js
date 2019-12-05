import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyHeight from "../Common/applyHeight";

const Alert = (props) =>{
    return (
        <div className={applyStyles(props)} {...applyHeight.applyHeightAttributes(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-alert",
        {"uk-alert": props.xxx},
        " "
    )
};

Alert.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Alert.defaultProps = {
    children: undefined
};

export default Alert;
