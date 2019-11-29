import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyPanel from "../Common/applyPanel";
import applyWidth from "../Common/applyWidth";
import applyMargin from "../Common/applyMargin";
import applyVisibility from "../Common/applyVisibility";

const Panel = (props) =>{
    return (
        <div className={
            applyStyles(props) +
            applyPanel(props) +
            applyWidth(props) +
            applyMargin(props) +
            applyVisibility(props)
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
