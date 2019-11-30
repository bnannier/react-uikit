import PropTypes from 'prop-types';
import classNames from "classnames";

const applyHeight = (props) => {
    return classNames(" ",
        {"uk-height-1-1": props.height1_1},
        {"uk-height-small": props.heightSmall},
        {"uk-height-max-small": props.heightMaxSmall},
        {"uk-height-medium": props.heightMedium},
        {"uk-height-max-medium": props.heightMaxMedium},
        {"uk-height-large": props.heightLarge},
        {"uk-height-max-large": props.heightMaxLarge},
        " "
    );
};

applyHeight.propTypes = {
    height1_1: PropTypes.bool,
    heightSmall: PropTypes.bool,
    heightMaxSmall: PropTypes.bool,
    heightMedium: PropTypes.bool,
    heightMaxMedium: PropTypes.bool,
    heightLarge: PropTypes.bool,
    heightMaxLarge: PropTypes.bool,
};

applyHeight.defaultProps = {
    height1_1: false,
    heightSmall: false,
    heightMaxSmall: false,
    heightMedium: false,
    heightMaxMedium: false,
    heightLarge: false,
    heightMaxLarge: false,
};

export default applyHeight;