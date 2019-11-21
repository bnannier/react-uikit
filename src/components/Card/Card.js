import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyWidth from '../Common/width'
import './card.scss';

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

export default Card;
