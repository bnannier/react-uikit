import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.scss';
import applyHeight from "../Common/applyHeight";

const Section = (props) =>{
    return (
        <div className={
            applyStyles(props)
        } {...applyHeight.applyHeightAttributes(props)} style={{backgroundImage: "url(" + props.Image + ")"}}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(" uk-section",
        {"uk-section-default": props.default},
        {"uk-section-muted": props.muted},
        {"uk-section-primary": props.primary},
        {"uk-section-secondary": props.secondary},
        {"uk-section-xsmall": props.xsmall},
        {"uk-section-small": props.small},
        {"uk-section-large": props.large},
        {"uk-section-xlarge": props.xlarge},
        " "
    )
};

Section.propTypes = {
    /** Adds the default background color of your site */
    default: PropTypes.bool,
    /** Adds a muted background color */
    muted: PropTypes.bool,
    /** Adds a primary background color */
    primary: PropTypes.bool,
    /** Adds a secondary background color */
    secondary: PropTypes.bool,
    /** Add this prop to decrease a section's padding to a minimum */
    xsmall: PropTypes.bool,
    /** Add this prop to decrease a section's padding */
    small: PropTypes.bool,
    /** Add this prop to increase a section's padding */
    large: PropTypes.bool,
    /** Add this prop to further increase a section's padding */
    xlarge: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Section.defaultProps = {
    default: false,
    muted: false,
    primary: false,
    secondary: false,
    xsmall: false,
    small: false,
    large: false,
    xlarge: false,
    children: undefined
};

export default Section;
