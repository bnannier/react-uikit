import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.scss';
import applyMargin from "../Common/applyMargin";
import applyAlign from "../Common/applyAlign";
import applyBorder from "../Common/applyBorder";
import applyHeight from "../Common/applyHeight";
import applyAll from "../Common/applyAll";
import applyBlend from "../Common/applyBlend";

const Image = (props) =>{
    return (
        <img className={
            applyClasses(props) +
            applyMargin(props) +
            applyAlign(props) +
            applyBorder(props) +
            applyBlend(props) +
            applyAll(props)
        } {...applyHeight.applyHeightAttributes(props)} data-src={props.src} width={props.width} height={props.height} alt={props.alt} uk-img="">{props.children}</img>
    )
};

const applyClasses = (props) => {
    return classNames(" ",
        {"uk-logo-inverse": props.logoInverse},
        " "
    )
};

Image.propTypes = {
    /**  */
    logoInverse: PropTypes.bool,
    /**  */
    src: PropTypes.string,
    /**  */
    width: PropTypes.number,
    /**  */
    height: PropTypes.number,
    /**  */
    alt: PropTypes.string,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

Image.defaultProps = {
    logoInverse: false,
    src: "",
    children: undefined
};

export default Image;
