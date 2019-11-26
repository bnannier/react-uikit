import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyWidth from "./applyWidth";
import applyMargin from "../Margin/applyMargin";
import applyVisibility from "../Visibility/applyVisibility";

const Width = (props) =>{
    return (
        <div className={applyStyles(props) + applyWidth(props) + applyMargin(props) + applyVisibility(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(" ")
};

Width.propTypes = {

};

Width.defaultProps = {

};

export default Width;
