import React from 'react';
import applyMargin from "../Common/applyMargin";

const Margin = (props) =>{
    return (
        <div className={applyMargin(props)}>{props.children}</div>
    )
};

export default Margin;
