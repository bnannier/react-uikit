import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

const Animation = (props) => {
    if (props.cls) {
        return (
            <div uk-scrollspy={`cls: ${applyClasses(props)}; repeat: true`} tabIndex="0">{props.children}</div>
        )
    } else {
        return (
            <div className={"uk-animation-toggle" + applyClasses(props)} tabIndex="0">{props.children}</div>
        )
    }
};

const applyClasses = (props) => {
    console.log(props);

    return classNames(
        {"uk-animation-fade": props.fade},

        {"uk-animation-scale-up": props.scale && props.up},
        {"uk-animation-scale-down": props.scale && props.down},

        {"uk-animation-slide-top": props.slide && props.top && !props.small && !props.medium},
        {"uk-animation-slide-bottom": props.slide && props.bottom && !props.small && !props.medium},
        {"uk-animation-slide-left": props.slide && props.left && !props.small && !props.medium},
        {"uk-animation-slide-right": props.slide && props.right && !props.small && !props.medium},

        {"uk-animation-slide-top-small": props.slide && props.top && props.small},
        {"uk-animation-slide-bottom-small": props.slide && props.bottom && props.small},
        {"uk-animation-slide-left-small": props.slide && props.left && props.small},
        {"uk-animation-slide-right-small": props.slide && props.right && props.small},

        {"uk-animation-slide-top-medium": props.slide && props.top && props.medium},
        {"uk-animation-slide-bottom-medium": props.slide && props.bottom && props.medium},
        {"uk-animation-slide-left-medium": props.slide && props.left && props.medium},
        {"uk-animation-slide-right-medium": props.slide && props.right && props.medium},

        {"uk-animation-kenburns": props.kenBurns},
        {"uk-animation-shake": props.shake},
        {"uk-animation-stroke": props.stroke},
        {"uk-animation-reverse": props.reverse},
        {"uk-animation-fast": props.fast},
    )
};

Animation.propTypes = {
    /** The sub component fades in */
    fade: PropTypes.bool,

    /** Allows the sub component to scale */
    scale: PropTypes.bool,
    /** The sub component fades in and scales up */
    up: PropTypes.bool,
    /** The sub component fades in and scales down */
    down: PropTypes.bool,

    /** Allows the sub component to fade and slide  */
    slide: PropTypes.bool,
    /** The sub component fades and slides in from the top by its own height or width */
    top: PropTypes.bool,
    /** The sub component fades and slides in from the bottom by its own height or width */
    bottom: PropTypes.bool,
    /** The sub component fades and slides in from the left by its own height or width */
    left: PropTypes.bool,
    /** The sub component fades and slides in from the right by its own height or width */
    right: PropTypes.bool,

    /** The sub component fades and slides in from the top, bottom, left or right with a smaller distance which is specified by a fixed pixel value */
    small: PropTypes.bool,
    /** The sub component fades and slides in from the top, bottom, left or right with a medium distance which is specified by a fixed pixel value */
    medium: PropTypes.bool,

    /** The sub component scales very slowly up without fading in */
    kenBurns: PropTypes.bool,
    /** The sub component shakes */
    shake: PropTypes.bool,
    /** The SVG sub component strokes are drawn */
    stroke: PropTypes.bool,
    /** Reverse any animation */
    reverse: PropTypes.bool,
    /** Play animations at a faster speed */
    fast: PropTypes.bool,

    /** Sub components to be passed in */
    children: PropTypes.node,
};

Animation.defaultProps = {
    fade: false,

    scale: false,
    up: false,
    down: false,

    slide: false,
    top: false,
    bottom: false,
    left: false,
    right: false,

    small: false,
    medium: false,

    kenBurns: false,
    shake: false,
    stroke: false,
    reverse: false,
    fast: false,

    children: undefined
};

export default Animation;
