import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormFieldset = (props) => {
    return (<fieldset className={applyStyles(props)}>{props.children}</fieldset>);
};

const applyStyles = (props) => {
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
