import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyHeight from "../Common/applyHeight";
import applyAll from "../Common/applyAll";
import applyDisabled from "../Common/applyDisabled";

const Button = (props) =>{
    if(props.close) {
        return (
            <button className={
                applyClasses(props) +
                applyDisabled(props) +
                applyAll(props)
            } {...applyHeight.applyHeightAttributes(props)} uk-close="">{props.children}</button>
        )
    }else {
        return (
            <button className={
                applyClasses(props) +
                applyDisabled(props) +
                applyAll(props)
            } {...applyHeight.applyHeightAttributes(props)}>{props.children}</button>
        )
    }
};

const applyClasses = (props) => {
    return classNames(" ",
        {"uk-xxx": props.xxx},
        " "
    )
};

Button.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Button.defaultProps = {
    children: undefined
};

export default Button;
