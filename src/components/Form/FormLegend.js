import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyAll from "../Common/applyAll";

const FormLegend = (props) => {
    return (
        <legend className={
            applyClasses(props) +
            applyAll(props)
        }>{props.children}</legend>);
};

const applyClasses = (props) => {
    return classNames("uk-legend")
};

FormLegend.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

FormLegend.defaultProps = {
    children: undefined
};

export default FormLegend;
