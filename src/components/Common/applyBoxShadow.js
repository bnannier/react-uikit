import PropTypes from 'prop-types';
import classNames from "classnames";

const applyBoxShadow = (props) => {
    return classNames(" ",
        {"uk-box-shadow-small": props.boxShadowSmall},
        {"uk-box-shadow-medium": props.boxShadowMedium},
        {"uk-box-shadow-large": props.boxShadowLarge},
        {"uk-box-shadow-xlarge": props.boxShadowXLarge},

        {"uk-box-shadow-bottom": props.boxShadowBottom},

        {"uk-box-shadow-hover-small": props.boxShadowHoverSmall},
        {"uk-box-shadow-hover-medium": props.boxShadowHoverMedium},
        {"uk-box-shadow-hover-large": props.boxShadowHoverLarge},
        {"uk-box-shadow-hover-xlarge": props.boxShadowHoverXLarge},
        " "
    );
};

applyBoxShadow.propTypes = {
    /** Add this prop to apply a small box shadow. */
    boxShadowSmall: PropTypes.bool,
    /** Add this prop to apply a medium box shadow. */
    boxShadowMedium: PropTypes.bool,
    /** Add this prop to apply a large box shadow. */
    boxShadowLarge: PropTypes.bool,
    /** Add this prop to apply a very large box shadow. */
    boxShadowXLarge: PropTypes.bool,
    /** To apply a box shadow at the bottom of an element so that appears to be hovering. */
    boxShadowBottom: PropTypes.bool,
    /** Add this prop to apply a small box shadow on hover. */
    boxShadowHoverSmall: PropTypes.bool,
    /** Add this prop to apply a medium box shadow on hover. */
    boxShadowHoverMedium: PropTypes.bool,
    /** Add this prop to apply a large box shadow on hover. */
    boxShadowHoverLarge: PropTypes.bool,
    /** Add this prop to apply a very large box shadow on hover. */
    boxShadowHoverXLarge: PropTypes.bool
};

applyBoxShadow.defaultProps = {
    boxShadowSmall: false,
    boxShadowMedium: false,
    boxShadowLarge: false,
    boxShadowXLarge: false,

    boxShadowBottom: false,

    boxShadowHoverSmall: false,
    boxShadowHoverMedium: false,
    boxShadowHoverLarge: false,
    boxShadowHoverXLarge: false
};

export default applyBoxShadow;
