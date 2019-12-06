import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

const List = (props) =>{
    return (
        <ul>{props.children}</ul>
    )
};

List.propTypes = {
    /** Pass children elements to this element */
    children: PropTypes.node,
};

List.defaultProps = {
    children: undefined
};

List.Item = ListItem;
export default List;
