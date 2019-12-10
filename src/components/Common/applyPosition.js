import PropTypes from 'prop-types';
import classNames from "classnames";

const applyPosition = (props) => {
    return classNames(" ",
        {"uk-position-top": props.positionTop},
        {"uk-position-bottom": props.positionBottom},
        {"uk-position-left": props.positionLeft},
        {"uk-position-right": props.positionRight},

        {"uk-position-top-left": props.positionTopLeft},
        {"uk-position-top-center": props.positionTopCenter},
        {"uk-position-top-right": props.positionTopRight},
        {"uk-position-center-left": props.positionCenterLeft},
        {"uk-position-center": props.positionCenter},
        {"uk-position-center-right": props.positionCenterRight},
        {"uk-position-bottom-left": props.positionBottomLeft},
        {"uk-position-bottom-center": props.positionBottomCenter},
        {"uk-position-bottom-right": props.positionBottomRight},

        {"uk-position-cover": props.positionCover},

        {"uk-position-center-left-out": props.positionCenterLeftOut},
        {"uk-position-center-right-out": props.positionCenterRightOut},

        {"uk-position-small": props.positionSmall},
        {"uk-position-small": props.positionMedium},
        {"uk-position-small": props.positionLarge},
        " "
    );
};

applyPosition.propTypes = {
    /** Positions the element at the top. */
    positionTop: PropTypes.bool,
    /** Positions the element at the bottom. */
    positionBottom: PropTypes.bool,
    /** Positions the element at the left. */
    positionLeft: PropTypes.bool,
    /** Positions the element at the right. */
    positionRight: PropTypes.bool,

    /** Positions the element at the top left. */
    positionTopLeft: PropTypes.bool,
    /** Positions the element at the top center. */
    positionTopCenter: PropTypes.bool,
    /** Positions the element at the top right. */
    positionTopRight: PropTypes.bool,
    /** Positions the element vertically centered in the middle. */
    positionCenterLeft: PropTypes.bool,
    /** Positions the element vertically centered on the left. */
    positionCenter: PropTypes.bool,
    /** Positions the element vertically centered on the right. */
    positionCenterRight: PropTypes.bool,
    /** Positions the element at the bottom left. */
    positionBottomLeft: PropTypes.bool,
    /** Positions the element at the bottom center. */
    positionBottomCenter: PropTypes.bool,
    /** Positions the element at the bottom right. */
    positionBottomRight: PropTypes.bool,

    /** If you want a position element to cover its container. */
    positionCover: PropTypes.bool,

    /** Positions the element vertically centered outside on the left. */
    positionCenterLeftOut: false,
    /** Positions the element vertically centered outside on the right. */
    positionCenterRightOut: false,

    /** To apply a small margin to positioned elements, add the positionSmall prop. */
    positionSmall: false,
    /** To apply a medium margin to positioned elements, add the positionMedium prop. */
    positionMedium: false,
    /** To apply a large margin to positioned elements, add the positionLarge prop. */
    positionLarge: false
};

applyPosition.defaultProps = {
    positionTop: false,
    positionBottom: false,
    positionLeft: false,
    positionRight: false,

    positionTopLeft: false,
    positionTopCenter: false,
    positionTopRight: false,
    positionCenterLeft: false,
    positionCenter: false,
    positionCenterRight: false,
    positionBottomLeft: false,
    positionBottomCenter: false,
    positionBottomRight: false,

    positionCover: false,

    positionCenterLeftOut: false,
    positionCenterRightOut: false,

    positionSmall: false,
    positionMedium: false,
    positionLarge: false,
};

export default applyPosition;
