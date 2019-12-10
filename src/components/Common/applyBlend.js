import PropTypes from 'prop-types';
import classNames from "classnames";

const applyBlend = (props) => {
    return classNames(" ",
        {"uk-blend-multiply": props.blendMultiply},
        {"uk-blend-screen": props.blendScreen},
        {"uk-blend-overlay": props.blendOverlay},
        {"uk-blend-darken": props.blendDarken},
        {"uk-blend-lighten": props.blendLighten},
        {"uk-blend-color-dodge": props.blendColorDodge},
        {"uk-blend-color-burn": props.blendColorBurn},
        {"uk-blend-hard-light": props.blendHardLight},
        {"uk-blend-soft-light": props.blendSoftLight},
        {"uk-blend-difference": props.blendDifference},
        {"uk-blend-exclusion": props.blendExclusion},
        {"uk-blend-hue": props.blendHue},
        {"uk-blend-saturation": props.blendSaturation},
        {"uk-blend-color": props.blendColor},
        {"uk-blend-luminosity": props.blendLuminosity},
        " "
    );
};

applyBlend.propTypes = {
    /** This prop sets the blend mode to multiply. */
    blendMultiply: PropTypes.bool,
    /** This prop sets the blend mode to screen. */
    blendScreen: PropTypes.bool,
    /** This prop sets the blend mode to overlay. */
    blendOverlay: PropTypes.bool,
    /** This prop sets the blend mode to darken. */
    blendDarken: PropTypes.bool,
    /** This prop sets the blend mode to lighten. */
    blendLighten: PropTypes.bool,
    /** This prop sets the blend mode to color dodge. */
    blendColorDodge: PropTypes.bool,
    /** This prop sets the blend mode to color burn. */
    blendColorBurn: PropTypes.bool,
    /** This prop sets the blend mode to hard light. */
    blendHardLight: PropTypes.bool,
    /** This prop sets the blend mode to soft light. */
    blendSoftLight: PropTypes.bool,
    /** This prop sets the blend mode to difference. */
    blendDifference: PropTypes.bool,
    /** This prop sets the blend mode to exclusion. */
    blendExclusion: PropTypes.bool,
    /** This prop sets the blend mode to hue. */
    blendHue: PropTypes.bool,
    /** This prop sets the blend mode to saturation. */
    blendSaturation: PropTypes.bool,
    /** This prop sets the blend mode to color. */
    blendColor: PropTypes.bool,
    /** This prop sets the blend mode to luminosity. */
    blendLuminosity: PropTypes.bool,
};

applyBlend.defaultProps = {
    blendMultiply: false,
    blendScreen: false,
    blendOverlay: false,
    blendDarken: false,
    blendLighten: false,
    blendColorDodge: false,
    blendColorBurn: false,
    blendHardLight: false,
    blendSoftLight: false,
    blendDifference: false,
    blendExclusion: false,
    blendHue: false,
    blendSaturation: false,
    blendColor: false,
    blendLuminosity: false,
};

export default applyBlend;
