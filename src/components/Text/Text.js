import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyText from "../Common/applyText";

const Text = (props) =>{
    return (
        <div className={applyStyles(props) + applyText(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames(" ");
};

Text.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Text.defaultProps = {
    children: undefined
};

export default Text;
