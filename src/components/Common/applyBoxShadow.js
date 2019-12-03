import PropTypes from 'prop-types';
import classNames from "classnames";

const applyBoxShadow = (props) => {
    return classNames(" ",
        {"uk-box-shadow-small": props.boxShadowSmall},
        {"uk-box-shadow-medium": props.boxShadowMedium},
        {"uk-box-shadow-large": props.boxShadowLarge},
        {"uk-box-shadow-xlarge": props.boxShadowXLarge},
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
};

applyBoxShadow.defaultProps = {
    boxShadowSmall: false,
    boxShadowMedium: false,
    boxShadowLarge: false,
    boxShadowXLarge: false,
};

export default applyBoxShadow;
