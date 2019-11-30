import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyPanel from "../Common/applyPanel";
import applyWidth from "../Common/applyWidth";
import applyMargin from "../Common/applyMargin";
import applyVisibility from "../Common/applyVisibility";
import applyFlex from "../Common/applyFlex";

const Panel = (props) =>{
    return (
        <div className={
            applyStyles(props) +
            applyPanel(props) +
            applyWidth(props) +
            applyMargin(props) +
            applyVisibility(props) +
            applyFlex(props)
        }>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(" ")
};

Panel.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Panel.defaultProps = {
    children: undefined
};

export default Panel;
