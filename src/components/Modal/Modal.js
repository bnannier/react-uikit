import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyWidth from '../Common/applyWidth'
import applyText from '../Common/applyText';
import applyMargin from '../Common/applyMargin';
import applyFlex from '../Common/applyFlex';
import applyHeight from "../Common/applyHeight";
import applyStyles from "../Common/applyStyles";
import applyAll from "../Common/applyAll";

const Modal = (props) => {
    return (
        <div className={
            applyClasses(props) +
            applyWidth(props) +
            applyHeight.applyHeightClasses(props) +
            applyText(props) +
            applyMargin(props) +
            applyFlex(props) +
            applyAll(props)
        } {...applyStyles(props)} {...applyHeight.applyHeightAttributes(props)} uk-grid={applyGrid(props)}>{props.children}</div>
    )
};

const applyGrid = (props) => {
    let gridOptions = [];
    if (props.masonry) {
        gridOptions.push('masonry:' + props.masonry);
    }
    if (props.parallax) {
        gridOptions.push('parallax:' + props.parallax);
    }
    return gridOptions.join(';');
};

const applyClasses = (props) => {
    return classNames(" ",
        {"uk-grid-small": props.small},
        {"uk-grid-medium": props.medium},
        {"uk-grid-large": props.large},
        {"uk-grid-collapse": props.collapse},
        {"uk-grid-column-small": props.columnSmall},
        {"uk-grid-row-small": props.rowSmall},
        {"uk-grid-column-medium": props.columnMedium},
        {"uk-grid-row-medium": props.rowMedium},
        {"uk-grid-column-large": props.columnLarge},
        {"uk-grid-row-large": props.rowLarge},
        {"uk-grid-column-collapse": props.columnCollapse},
        {"uk-grid-row-collapse": props.rowCollapse},
        {"uk-grid-divider": props.divider},
        {"uk-grid-match": props.match},
        " "
    )
};

Modal.propTypes = {
    /** Add this props to apply a small gap. */
    small: PropTypes.bool,
    /** Add this props to apply a medium gap like the default one, but without a breakpoint. */
    medium: PropTypes.bool,
    /** Add this props to apply a large gap with breakpoints. */
    large: PropTypes.bool,
    /** Add this props to remove the grid gap entirely. */
    collapse: PropTypes.bool,
    /** Add one of these props to apply a small gap to the column or row. */
    columnSmall: PropTypes.bool,
    rowSmall: PropTypes.bool,
    /** Add one of these props to apply a medium gap to the column or row. */
    columnMedium: PropTypes.bool,
    rowMedium: PropTypes.bool,
    /** Add one of these props to apply a large gap to the column or row. */
    columnLarge: PropTypes.bool,
    rowLarge: PropTypes.bool,
    /** Add one of these props to remove the grid gap entirely from the column or row. */
    columnCollapse: PropTypes.bool,
    rowCollapse: PropTypes.bool,
    /** This prop can be combined with the gap modifiers. As soon as the grid stacks, the divider lines will become horizontal. */
    divider: PropTypes.bool,
    /** To match the height of the direct child of each cell, add this prop. */
    match: PropTypes.bool,

    /** If grid cells have different heights, a layout free of gaps can be created by adding this prop.  */
    masonry: PropTypes.bool,
    /** To move single columns of a grid at different speeds while scrolling, just add this prop. */
    parallax: PropTypes.number,

    /** Pass children elements to this element. */
    children: PropTypes.node,
};

Modal.defaultProps = {
    small: false,
    medium: false,
    large: false,
    collapse: false,
    columnSmall: false,
    rowSmall: false,
    columnMedium: false,
    rowMedium: false,
    columnLarge: false,
    rowLarge: false,
    columnCollapse: false,
    rowCollapse: false,
    divider: false,
    match: false,

    masonry: undefined,
    parallax: undefined,

    children: undefined
};

export default Modal;
