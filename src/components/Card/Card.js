import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyWidth from '../Common/applyWidth'
import CardTitle from "./CardTitle";
import applyBackground from "../Common/applyBackground";
import applyMargin from "../Common/applyMargin";
import applyHeight from "../Common/applyHeight";
import applyFlex from "../Common/applyFlex";
import applyText from "../Common/applyText";
import applyAnimation from "../Common/applyAnimation";
import applyOrigin from "../Common/applyOrigin";
import applyStyles from "../Common/applyStyles";
import applyAll from "../Common/applyAll";

const Card = (props) => {
    return (
        <div className={
            applyClasses(props) +
            applyWidth(props) +
            applyBackground(props) +
            applyMargin(props) +
            applyHeight.applyHeightClasses(props) +
            applyFlex(props) +
            applyText(props) +
            applyAnimation(props) +
            applyOrigin(props) +
            applyAll(props)
        } style={{...applyStyles(props)}} {...applyHeight.applyHeightAttributes(props)}>{props.children}</div>
    )
};

const applyClasses = (props) => {
    return classNames(" uk-card",
        {"uk-card-body": props.body},
        {"uk-card-default": props.default},
        {"uk-card-primary": props.primary},
        {"uk-card-secondary": props.secondary},
        {"uk-card-hover": props.hover},
        {"uk-card-small": props.small},
        {"uk-card-large": props.large},
        " "
    )
};

Card.propTypes = {
    /** Add this props to the card to create padding between the card and its content */
    body: PropTypes.bool,
    /** Add this prop to create a visually styled box */
    default: PropTypes.bool,
    /** Add this prop to modify the card and emphasize it with a primary color */
    primary: PropTypes.bool,
    /** Add this prop to modify the card and give it a secondary background color */
    secondary: PropTypes.bool,
    /** Creates a hover effect on the card */
    hover: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Card.defaultProps = {
    body: false,
    default: false,
    primary: false,
    secondary: false,
    hover: false,
    children: undefined
};

Card.Title = CardTitle;
export default Card;
