import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyAll from "../Common/applyAll";

const Icon = (props) => {
    return (
        <i className={
            applyStyles(props) +
            applyAll(props)
        } uk-icon={`icon: ${checkIcon(props)}; ratio: ${props.ratio}`}>{props.children}</i>);
};

const applyStyles = (props) => {
    return classNames(" ",
        " "
    )
};

const checkIcon = (props) => {
    return classNames(
        {"heart": props.heart},
        {"home": props.home},
        {"move" : props.move}
    )

};

Icon.propTypes = {
    heart: PropTypes.bool,
    home: PropTypes.bool,


    /** Pass children elements to this element */
    children: PropTypes.node,
};

Icon.defaultProps = {
    children: undefined
};

export default Icon;
