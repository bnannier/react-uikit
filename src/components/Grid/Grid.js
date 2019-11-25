import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = (props) =>{
    return (
        <div className={applyStyles(props)} uk-grid="">{props.children}</div>
    )
};

const applyStyles = (props) => {
    return classNames("",
        {"uk-xxx": props.xxx}
    )
};

Grid.propTypes = {
    /** xxx */
    xxx: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Grid.defaultProps = {
    xxx: false,
    children: undefined
};

export default Grid;
