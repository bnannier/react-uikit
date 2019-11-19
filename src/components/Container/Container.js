import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './container.scss';

const Container = (props) =>{
    return (
        <div className={applyStyles(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-container",
        {"uk-container-xsmall": props.xsmall},
        {"uk-container-small": props.small},
        {"uk-container-large": props.large},
        {"uk-container-expand": props.expand},
    )
};

Container.propTypes = {
    /** Add this class for a xsmall container */
    xsmall: PropTypes.bool,
    /** Add this class for a small container */
    small: PropTypes.bool,
    /** Add this class for a large container */
    large: PropTypes.bool,
    /** Add this class, if you do not want to limit the container width but still want the dynamic horizontal padding */
    expand: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Container.defaultProps = {
    xsmall: false,
    small: false,
    large: false,
    expand: false,
    children: undefined
};

export default Container;
