import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) =>{
    return (
        <li>{props.children}</li>
    )
};

ListItem.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

ListItem.defaultProps = {
    children: undefined
};

export default ListItem;
