import React from 'react';
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
import applyStyles from "../Common/applyStyles";
import applyInverse from "../Common/applyInverse";
import applyPosition from "../Common/applyPosition";
import applyOverlay from "../Common/applyOverlay";
import applyResponsive from "../Common/applyResponsive";
import applyAll from "../Common/applyAll";

const Panel = (props) => {
    if (props.animationToggle) {
        return (
            <div
                className={
                    combineClasses(props) +
                    applyAll(props)
                }
                {...applyStyles(props)} {...applyHeight.applyHeightAttributes(props)}
                tabIndex="0">{props.children}</div>
        )
    } else if (props.overlayIcon) {
        return (
            <span className={
                combineClasses(props) +
                applyAll(props)
            } {...applyStyles(props)} {...applyHeight.applyHeightAttributes(props)} uk-overlay-icon="">{props.children}</span>
        )
    } else {
        return (
            <div className={
                combineClasses(props) +
                applyAll(props)
            } {...applyStyles(props)} {...applyHeight.applyHeightAttributes(props)}>{props.children}</div>
        )
    }
};

const combineClasses = (props) => {
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
        applyPadding(props) +
        applyInverse(props) +
        applyPosition(props) +
        applyOverlay(props) +
        applyResponsive(props)
    ).trim();
};

Panel.propTypes = {
    /** To toggle an animation on hover or focus, add the animationToggle prop to a parent element */
    animationToggle: PropTypes.bool,
    /** To display an overlay icon. */
    overlayIcon: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Panel.defaultProps = {
    animationToggle: false,
    overlayIcon: false,
    children: undefined
};

export default Panel;
