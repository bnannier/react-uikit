import PropTypes from 'prop-types';
import classNames from "classnames";

const applyHeightClasses = (props) => {
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

applyHeightClasses.propTypes = {
    height1_1: PropTypes.bool,
    heightSmall: PropTypes.bool,
    heightMaxSmall: PropTypes.bool,
    heightMedium: PropTypes.bool,
    heightMaxMedium: PropTypes.bool,
    heightLarge: PropTypes.bool,
    heightMaxLarge: PropTypes.bool
};

applyHeightClasses.defaultProps = {
    height1_1: false,
    heightSmall: false,
    heightMaxSmall: false,
    heightMedium: false,
    heightMaxMedium: false,
    heightLarge: false,
    heightMaxLarge: false
};

const applyHeightAttributes = (props) => {
    let heightViewportOptions = [];

    if (props.heightViewportOffsetTop) {
        heightViewportOptions.push('offset-top:' + props.heightViewportOffsetTop);
    }
    if (props.heightViewportOffsetBottom) {
        heightViewportOptions.push('offset-bottom:' + props.heightViewportOffsetBottom);
    }
    if (props.heightViewportExpand) {
        heightViewportOptions.push('expand:' + props.heightViewportExpand);
    }
    if (props.heightViewportMinHeight) {
        heightViewportOptions.push('min-height:' + props.heightViewportMinHeight);
    }

    if (heightViewportOptions.length) {
        return {
            'uk-height-viewport': heightViewportOptions.join(';')
        }
    } else {
        /*
         * If we do have offset, expsand or min-height, we do not need to add additional uk-height-viewport attribute as it is already there
         * If we do not have offset, expand or min-height, we still might need to display uk-height-viewport empty attribute if prop is there
         */
        if (props.heightViewport) {
            return {
                'uk-height-viewport': ''
            }
        } else {
            return {};
        }
    }
};

applyHeightAttributes.propTypes = {
    heightViewport: PropTypes.bool,
    heightViewportOffsetTop: PropTypes.bool,
    heightViewportOffsetBottom: PropTypes.any, // Here offset-bottom can be a selector, see https://getuikit.com/docs/height#viewport-height for more details
    heightViewportExpand: PropTypes.bool,
    heightViewportMinHeight: PropTypes.bool,
};

applyHeightAttributes.defaultProps = {
    heightViewport: false,
    heightViewportOffsetTop: undefined,
    heightViewportOffsetBottom: undefined,
    heightViewportExpand: undefined,
    heightViewportMinHeight: undefined,
};

export default {
    applyHeightClasses,
    applyHeightAttributes
};
