import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyAll from "../Common/applyAll";

const GridItemMatch = (props) => {
    return (
        <div className={
            applyClasses(props) +
            applyAll(props)
        }>{props.children}</div>)
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
