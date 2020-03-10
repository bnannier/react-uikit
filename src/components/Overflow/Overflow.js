import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Overflow = (props) =>{
    return (
        <div className={applyClasses(props)}>{props.children}</div>
    )
};

const applyClasses = (props) => {
    return classNames("",
        {"uk-overflow-hidden": props.hidden}
    )
};

Overflow.propTypes = {
    /** Hide the overflow */
    hidden: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Overflow.defaultProps = {
    hidden: false,
    children: undefined
};

export default Overflow;
