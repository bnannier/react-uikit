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
    /** The transition originates from the top left. */
    transformOriginTopLeft: PropTypes.bool,
    /** The transition originates from the top. */
    transformOriginTopCenter: PropTypes.bool,
    /** The transition originates from the top right. */
    transformOriginTopRight: PropTypes.bool,

    /** The transition originates from the left. */
    transformOriginCenterLeft: PropTypes.bool,
    /** The transition originates from the right. */
    transformOriginCenterRight: PropTypes.bool,

    /** The transition originates from the bottom left. */
    transformOriginBottomLeft: PropTypes.bool,
    /** The transition originates from the bottom. */
    transformOriginBottomCenter: PropTypes.bool,
    /** The transition originates from the bottom right. */
    transformOriginBottomRight: PropTypes.bool,
};

applyOrigin.defaultProps = {
    transformOriginTopLeft: false,
    transformOriginTopCenter: false,
    transformOriginTopRight: false,

    transformOriginCenterLeft: false,
    transformOriginCenterRight: false,

    transformOriginBottomLeft: false,
    transformOriginBottomCenter: false,
    transformOriginBottomRight: false,
};

export default applyOrigin;
