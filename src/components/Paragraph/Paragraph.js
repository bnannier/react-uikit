import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyAll from "../Common/applyAll";

const Paragraph = (props) => {
    return (
        <p className={
            applyStyles(props) +
            applyAll(props)
        }>{props.children}</p>);
};

const applyStyles = (props) => {
    return classNames(" ",
        {"uk-dropcap": props.dropcap},
        " "
    )
};

Paragraph.propTypes = {
    /** With the dropcap prop you can achieve a drop cap in a paragraph */
    dropcap: PropTypes.bool,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Paragraph.defaultProps = {
    children: undefined
};

export default Paragraph;
