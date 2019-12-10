import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Prism from "prismjs";
import "./prism.css";

import '../index.scss';
import applyResize from "../Common/applyResize";
import applyAll from "../Common/applyAll";

const CodeBlock = (props) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <pre className={
            applyClasses(props) +
            applyResize(props) +
            applyAll(props)
        }>
          <code className={`language-${props.language}`}>
            {props.children}
          </code>
        </pre>
    );
};

const applyClasses = (props) => {
    return classNames(" ")
};

CodeBlock.propTypes = {

    language: PropTypes.string,
    /** Pass children elements to this element */
    children: PropTypes.node,
};

CodeBlock.defaultProps = {
    language: "",
    children: undefined
};

export default CodeBlock;
