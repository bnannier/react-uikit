import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardTitle = (props) => {
    return (<h3 className={applyClasses(props)}>{props.children}</h3>);
};

const applyClasses = (props) => {
    return classNames("uk-card-title")
};

CardTitle.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

CardTitle.defaultProps = {
    children: undefined
};

export default CardTitle;
