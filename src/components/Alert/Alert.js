import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyHeight from "../Common/applyHeight";

const Alert = (props) =>{
    return (
        <div className={applyClasses(props)} {...applyHeight.applyHeightAttributes(props)}>{props.children}</div>
    )
};

const applyClasses = (props) => {
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
