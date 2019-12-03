import PropTypes from 'prop-types';
import classNames from "classnames";

const applyAnimation = (props) => {
    return classNames(" ",
        {"uk-animation-toggle": props.animationToggle},

        {"uk-animation-fade": props.animationFade},

        {"uk-animation-scale-up": props.animationScaleUp},
        {"uk-animation-scale-down": props.animationScaleDown},

        {"uk-animation-slide-top": props.animationSlideTop},
        {"uk-animation-slide-bottom": props.animationSlideBottom},
        {"uk-animation-slide-left": props.animationSlideLeft},
        {"uk-animation-slide-right": props.animationSlideRight},

        {"uk-animation-slide-top-small": props.animationSlideTopSmall},
        {"uk-animation-slide-bottom-small": props.animationSlideBottomSmall},
        {"uk-animation-slide-left-small": props.animationSlideLeftSmall},
        {"uk-animation-slide-right-small": props.animationSlideRightSmall},

        {"uk-animation-slide-top-medium": props.animationSlideTopMedium},
        {"uk-animation-slide-bottom-medium": props.animationSlideBottomMedium},
        {"uk-animation-slide-left-medium": props.animationSlideLeftMedium},
        {"uk-animation-slide-right-medium": props.animationSlideRightMedium},

        {"uk-animation-kenburns": props.animationKenBurns},
        {"uk-animation-shake": props.animationShake},
        {"uk-animation-stroke": props.animationStroke},
        {"uk-animation-reverse": props.animationReverse},
        {"uk-animation-fast": props.animationFast},
        " "
    );
};

applyAnimation.propTypes = {
    animationToggle: PropTypes.bool,
    animationFade: PropTypes.bool,

    animationScaleUp: PropTypes.bool,
    animationScaleDown: PropTypes.bool,

    animationSlideTop: PropTypes.bool,
    animationSlideBottom: PropTypes.bool,
    animationSlideLeft: PropTypes.bool,
    animationSlideRight: PropTypes.bool,

    animationSlideTopSmall: PropTypes.bool,
    animationSlideBottomSmall: PropTypes.bool,
    animationSlideLeftSmall: PropTypes.bool,
    animationSlideRightSmall: PropTypes.bool,

    animationSlideTopMedium: PropTypes.bool,
    animationSlideBottomMedium: PropTypes.bool,
    animationSlideLeftMedium: PropTypes.bool,
    animationSlideRightMedium: PropTypes.bool,

    animationKenBurns: PropTypes.bool,
    animationShake: PropTypes.bool,
    animationStroke: PropTypes.bool,
    animationReverse: PropTypes.bool,
    animationFast: PropTypes.bool,
};

applyAnimation.defaultProps = {
    animationToggle: false,

    animationFade: false,

    animationScaleUp: false,
    animationScaleDown: false,

    animationSlideTop: false,
    animationSlideBottom: false,
    animationSlideLeft: false,
    animationSlideRight: false,

    animationSlideTopSmall: false,
    animationSlideBottomSmall: false,
    animationSlideLeftSmall: false,
    animationSlideRightSmall: false,

    animationSlideTopMedium: false,
    animationSlideBottomMedium: false,
    animationSlideLeftMedium: false,
    animationSlideRightMedium: false,

    animationKenBurns: false,
    animationShake: false,
    animationStroke: false,
    animationReverse: false,
    animationFast: false,
};

export default applyAnimation;
