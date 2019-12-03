import PropTypes from 'prop-types';
import classNames from "classnames";

const applyOrigin = (props) => {
    return classNames(" ",
        {"uk-transform-origin-top-left": props.transformOriginTopLeft},
        {"uk-transform-origin-top-center": props.transformOriginTopCenter},
        {"uk-transform-origin-top-right": props.transformOriginTopRight},

        {"uk-transform-origin-center-left": props.transformOriginCenterLeft},
        {"uk-transform-origin-center-right": props.transformOriginCenterRight},

        {"uk-transform-origin-bottom-left": props.transformOriginBottomLeft},
        {"uk-transform-origin-bottom-center": props.transformOriginBottomCenter},
        {"uk-transform-origin-bottom-right": props.transformOriginBottomRight},
        " "
    );
};

applyOrigin.propTypes = {
    /** Aligns text to the left. */
    textLeft: PropTypes.bool,
};

applyOrigin.defaultProps = {
    textLeft: false,
};

export default applyOrigin;
