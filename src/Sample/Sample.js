import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Sample = (props) =>{
    return (
        <div className={applyClasses(props)}>{props.children}</div>
    )
};

const applyClasses = (props) => {
    return classNames("uk-xxx",
        {"uk-xxx": props.xxx}
    )
};

Sample.propTypes = {
    /** Xxxx */
    xxx: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Sample.defaultProps = {
    xxx: false,
    children: undefined
};

export default Sample;
