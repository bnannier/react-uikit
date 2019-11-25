import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './sample.scss';

const Sample = (props) =>{
    return (
        <div className={applyStyles(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-xxx",
        {"uk-xxx": props.xxx}
    )
};

Sample.propTypes = {
    /** xxx */
    xxx: PropTypes.bool,
    children: PropTypes.node,
};

Sample.defaultProps = {
    xxx: false,
    children: undefined
};

export default Sample;
