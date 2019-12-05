import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

const Xxxx = (props) =>{
    return (
        <div className={applyClasses(props)}>{props.children}</div>
    )
};

const applyClasses = (props) => {
    return classNames(" ",
        {"uk-xxx": props.xxx},
        " "
    )
};

Xxxx.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Xxxx.defaultProps = {
    children: undefined
};

export default Xxxx;
