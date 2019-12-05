import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyPanel from "../Common/applyPanel";
import applyWidth from "../Common/applyWidth";
import applyMargin from "../Common/applyMargin";
import applyVisibility from "../Common/applyVisibility";
import applyFlex from "../Common/applyFlex";
import applyBackground from "../Common/applyBackground";
import applyHeight from "../Common/applyHeight";
import applyText from "../Common/applyText";
import applyAnimation from "../Common/applyAnimation";
import applyClearingFloating from "../Common/applyClearingFloating";
import applyOverflow from "../Common/applyOverflow";
import applyInline from "../Common/applyInline";
import applyBoxShadow from "../Common/applyBoxShadow";
import applyPadding from "../Common/applyPadding";
import applyCustomStyles from "../Common/applyCustomStyles";

const Panel = (props) => {
    if (props.animationToggle) {
        return (
            <div
                className={
                    applyStyles(props) +
                    combineStyles(props)
                }
                {...applyCustomStyles(props)} {...applyHeight.applyHeightAttributes(props)}
                tabIndex="0">{props.children}</div>
        )
    } else {
        return (
            <div className={
                applyStyles(props) +
                combineStyles(props)
            } {...applyCustomStyles(props)} {...applyHeight.applyHeightAttributes(props)}>{props.children}</div>
        )
    }
};

const combineStyles = (props) => {
    return (
        applyPanel(props) +
        applyWidth(props) +
        applyMargin(props) +
        applyVisibility(props) +
        applyFlex(props) +
        applyBackground(props) +
        applyHeight.applyHeightClasses(props) +
        applyText(props) +
        applyAnimation(props) +
        applyClearingFloating(props) +
        applyOverflow(props) +
        applyInline(props) +
        applyBoxShadow(props) +
        applyPadding(props)
    );
};

const applyStyles = (props) => {
    return classNames(" ")
};

Panel.propTypes = {
    /** To toggle an animation on hover or focus, add the animationToggle prop to a parent element */
    animationToggle: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Panel.defaultProps = {
    animationToggle: false,
    children: undefined
};

export default Panel;
