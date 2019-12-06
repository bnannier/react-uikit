import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyHeight from "../Common/applyHeight";

const Container = (props) =>{
    return (
        <div className={
            applyClasses(props)
        } {...applyHeight.applyHeightAttributes(props)}>{props.children}</div>
    )
};

const applyClasses = (props) => {
    return classNames(" uk-container",
        {"uk-container-xsmall": props.xsmall},
        {"uk-container-small": props.small},
        {"uk-container-large": props.large},
        {"uk-container-expand": props.expand},
        " "
    )
};

Container.propTypes = {
    /** Add this prop for a xsmall container */
    xsmall: PropTypes.bool,
    /** Add this prop for a small container */
    small: PropTypes.bool,
    /** Add this prop for a large container */
    large: PropTypes.bool,
    /** Add this prop, if you do not want to limit the container width but still want the dynamic horizontal padding */
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
