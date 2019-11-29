import React from 'react';
import PropTypes from 'prop-types';
import FormFieldset from "./FormFieldset";
import FormLegend from "./FormLegend";
import FormInput from "./FormInput";

const Form = (props) =>{
    return (
        <form>{props.children}</form>
    )
};

Form.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Form.defaultProps = {
    children: undefined
};

Form.Fieldset = FormFieldset;
Form.Legend = FormLegend;
Form.Input = FormInput;
export default Form;
