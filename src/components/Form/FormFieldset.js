import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyAll from "../Common/applyAll";

const FormFieldset = (props) => {
    return (
        <fieldset className={
            applyClasses(props) +
            applyAll(props)
        }>{props.children}</fieldset>
    );
};

const applyClasses = (props) => {
    return classNames("uk-fieldset")
};

FormFieldset.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

FormFieldset.defaultProps = {
    children: undefined
};

export default FormFieldset;
