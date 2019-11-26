import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = (props) =>{
    return (
        <div className={applyStyles(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-xxx",
        {"uk-xxx": props.xxx}
    )
};

Text.propTypes = {
    /** xxx */
    xxx: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Text.defaultProps = {
    xxx: false,
    children: undefined
};

export default Text;
