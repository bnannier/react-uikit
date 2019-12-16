import React from 'react';
import PropTypes from 'prop-types';

const Scrollspy = (props) => {
    let elements = React.Children.toArray(props.children);

    if (elements[0].type.name === "Animation") {
        // Inject props to Animation component
        return (React.cloneElement(props.children, {cls: true}))
    }else{
        console.log("Scrollspy requires Animation Component as child to animate sub components.");
    }
};

Scrollspy.propTypes = {
    /** The sub component fades in */
    fade: PropTypes.bool,

    /** Sub components to be passed in */
    children: PropTypes.node,
};

Scrollspy.defaultProps = {
    children: undefined
};

export default Scrollspy;
