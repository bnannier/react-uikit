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
};

export default applyPosition;
