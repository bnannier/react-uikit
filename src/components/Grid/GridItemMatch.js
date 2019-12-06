import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GridItemMatch = (props) => {
    return (<div className={applyClasses(props)}>{props.children}</div>)
};

const applyClasses = (props) => {
    return classNames("uk-grid-item-match")
};

GridItemMatch.propTypes = {
    /** Pass children elements to this element. */
    children: PropTypes.node,
};

GridItemMatch.defaultProps = {
    children: undefined
};

export default GridItemMatch;
