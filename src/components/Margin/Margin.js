import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyMargin from "./applyMargin";

const Margin = (props) =>{
    return (
        <div className={applyStyles(props) + applyMargin(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(" ")
};

Margin.propTypes = {

};

Margin.defaultProps = {

};

export default Margin;
