import PropTypes from 'prop-types';
import classNames from "classnames";
import applySelectors from "./applySelector";

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
    let heightMatchOptions = [];

    // Combined height options
    let heightOptions = {};

    // Process height viewport
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
        heightOptions['uk-height-viewport'] = heightViewportOptions.join(';');
    } else {
        /*
         * If we do have viewport offset, expsand or min-height, we do not need to add additional uk-height-viewport attribute as it is already there
         * If we do not have viewport offset, expand or min-height, we still might need to display uk-height-viewport empty attribute if prop is there
         */
        if (props.heightViewport) {
            heightOptions['uk-height-viewport'] = '';
        }
    }

    // Process height match
    if (props.heightMatchTarget) {
        heightMatchOptions.push('target:' + applySelectors(props.heightMatchTarget));
    }
    if (props.heightMatchRow) {
        heightMatchOptions.push('row:' + props.heightMatchRow);
    }
    if (heightMatchOptions.length) {
        heightOptions['uk-height-match'] = heightMatchOptions.join(';');
    } else {
        /*
         * If we do have match target or row we do not need to add additional uk-height-match attribute as it is already there
         * If we do not have match offset, target or row, we still might need to display uk-height-match empty attribute if prop is there
         */
        if (props.heightMatch) {
            heightOptions['uk-height-match'] = '';
        }
    }

    return heightOptions;
};

applyHeightAttributes.propTypes = {
    heightViewport: PropTypes.bool,
    heightViewportOffsetTop: PropTypes.bool,
    heightViewportOffsetBottom: PropTypes.string, // Here offset-bottom can be a selector, see https://getuikit.com/docs/height#viewport-height for more details
    heightViewportExpand: PropTypes.bool,
    heightViewportMinHeight: PropTypes.bool,
    heightMatch: PropTypes.bool,
    heightMatchTarget: PropTypes.string,
    heightMatchRow: PropTypes.bool
};

applyHeightAttributes.defaultProps = {
    heightViewport: false,
    heightViewportOffsetTop: undefined, // It is required to provide true or false for this attribute
    heightViewportOffsetBottom: undefined,
    heightViewportExpand: undefined, // It is required to provide true or false for this attribute
    heightViewportMinHeight: undefined,
    heightMatch: false,
    heightMatchTarget: undefined,
    heightMatchRow: undefined // It is required to provide true or false for this attribute
};

export default {
    applyHeightClasses,
    applyHeightAttributes
};
