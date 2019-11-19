import React from 'react';
import './section.scss';

const Section = ({children}) =>{
    return (
        <div className="uk-section">{children}</div>
    )
};

export default Section;
