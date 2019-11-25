import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyWidth from '../Common/width'
import CardTitle from "./CardTitle";

const Card = (props) =>{
    return (
        <div className={applyStyles(props) + applyWidth(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-card",
        {"uk-card-body": props.body},
        {"uk-card-default": props.default},
        {"uk-card-primary": props.primary},
        {"uk-card-secondary": props.secondary},
        {"uk-card-hover": props.hover},
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
    /** Affects all device widths, grid columns stay side by side */
    width: PropTypes.string,
    /** Affects device widths of 640px and larger. Grid columns will stack on smaller sizes */
    widthS: PropTypes.string,
    /** Affects device widths of 960px and larger. Grid columns will stack on smaller sizes */
    widthM: PropTypes.string,
    /** Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes */
    widthL: PropTypes.string,
    /** Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes */
    widthXL: PropTypes.string,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Card.defaultProps = {
    body: false,
    default: false,
    primary: false,
    secondary: false,
    hover: false,
    width: "",
    widthS: "",
    widthM: "",
    widthL: "",
    widthXL: "",
    children: undefined
};

Card.Title = CardTitle;
export default Card;
