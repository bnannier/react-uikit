import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyWidth from '../Common/applyWidth'
import applyText from '../Common/applyText';
import applyMargin from "../Common/applyMargin";

const Grid = (props) =>{
    return (
        <div className={
            applyStyles(props) +
            applyWidth(props) +
            applyText(props) +
            applyMargin(props)
        } uk-grid="">{props.children}</div>
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
    /** Add this props to apply a small gap. */
    small: PropTypes.bool,
    /** Add this props to apply a medium gap like the default one, but without a breakpoint. */
    medium: PropTypes.bool,
    /** Add this props to apply a large gap with breakpoints. */
    large: PropTypes.bool,
    /** Add this props to remove the grid gap entirely. */
    collapse: PropTypes.bool,
    /** Match the height of the direct child of each cell */
    match: PropTypes.bool,
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
