import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyWidth from '../Width/applyWidth'
import applyText from '../Text/applyText';

const Grid = (props) =>{
    return (
        <div className={applyStyles(props) + applyWidth(props) + applyText(props)} uk-grid="">{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(" ",
        {"uk-grid-small": props.small},
        {"uk-grid-medium": props.medium},
        {"uk-grid-large": props.large},
        {"uk-grid-collapse": props.collapse},
        {"uk-grid-match": props.match},
        " "
    )
};

Grid.propTypes = {
    /** Affects all device widths, grid columns stay side by side */
    width: PropTypes.string,
    /** Grid's child elements' are evenly split */
    child: PropTypes.bool,
    /** Divides the grid into equal units depending on the content size */
    auto: PropTypes.bool,
    /** Divides the grid into equal units depending on the available space */
    expand: PropTypes.bool,
    /** Match the height of the direct child of each cell */
    match: PropTypes.bool,
    /** Add this props to apply a small gap. */
    small: PropTypes.bool,
    /** Add this props to apply a medium gap like the default one, but without a breakpoint. */
    medium: PropTypes.bool,
    /** Add this props to apply a large gap with breakpoints. */
    large: PropTypes.bool,
    /** Add this props to remove the grid gap entirely. */
    collapse: PropTypes.bool,
    /** Aligns text to the left. */
    textLeft: PropTypes.bool,
    /** Aligns text to the right. */
    textRight: PropTypes.bool,
    /** Centers text horizontally. */
    textCenter: PropTypes.bool,
    /** Justifies text. */
    textJustify: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Grid.defaultProps = {
    width: "",
    child: false,
    auto: false,
    expand: false,
    match: false,
    small: false,
    medium: false,
    large: false,
    collapse: false,
    children: undefined
};

export default Grid;
