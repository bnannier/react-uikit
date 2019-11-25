import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import applyWidth from "./applyWidth";

const Width = (props) =>{
    return (
        <div className={applyStyles(props) + applyWidth(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(
        {"uk-width-auto": props.auto},
        {"uk-width-expand": props.expand}
    )
};

Width.propTypes = {
    /** The item expands only to the width of its own content. */
    auto: PropTypes.bool,
    /** The item expands to fill up the remaining space of the grid container. */
    expand: PropTypes.bool,
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

Width.defaultProps = {
    auto: false,
    expand: false,
    width: "",
    widthS: "",
    widthM: "",
    widthL: "",
    widthXL: "",
    children: undefined
};

export default Width;
