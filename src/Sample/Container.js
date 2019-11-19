import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './container.scss';

const Container = (props) =>{
    return (
        <div className={applyStyles(props)}>{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("uk-xxx",
        {"uk-xxx": props.xxx}
    )
};

Container.propTypes = {
    /** xxx */
    xxx: PropTypes.bool,
    children: PropTypes.node,
};

Container.defaultProps = {
    xxx: false,
    children: undefined
};

export default Container;
