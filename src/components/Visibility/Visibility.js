import React from 'react';
import applyWidth from "../Common/applyWidth";
import applyMargin from "../Common/applyMargin";
import applyVisibility from "../Common/applyVisibility";

const Visibility = (props) =>{
    return (
        <div className={applyWidth(props) + applyMargin(props) + applyVisibility(props)}>{props.children}</div>
    )
};

export default Visibility;
