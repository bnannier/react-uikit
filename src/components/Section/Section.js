import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './section.scss';

const Section = (props) =>{
    return (
        <div className={applyStyles(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-section",
        {"uk-section-muted": props.muted},
        {"uk-section-primary": props.primary},
        {"uk-section-secondary": props.secondary})
};

Section.propTypes = {
    /** Adds a muted background color */
    muted: PropTypes.bool,
    /** Adds a primary background color */
    primary: PropTypes.bool,
    /** Adds a secondary background color */
    secondary: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node
};

Section.defaultProps = {
    muted: false,
    primary: false,
    secondary: false,
    children: undefined
};

export default Section;
