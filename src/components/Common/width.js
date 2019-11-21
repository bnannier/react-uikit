import PropTypes from 'prop-types';
import classNames from 'classnames';
import './width.scss';

const applyWidth = (props) => {
    return classNames(" ",
        // Affects all device widths, grid columns stay side by side.
        {"uk-width-1-1": props.width_1_1},
        {"uk-width-1-2": props.width_1_2},
        {"uk-width-1-3": props.width_1_3},
        {"uk-width-2-3": props.width_2_3},
        {"uk-width-1-4": props.width_1_4},
        {"uk-width-3-4": props.width_3_4},
        {"uk-width-1-5": props.width_1_5},
        {"uk-width-4-5": props.width_4_5},
        {"uk-width-1-6": props.width_1_6},
        {"uk-width-5-6": props.width_5_6},

        // Affects device widths of 640px and larger
        {"uk-width-1-1@s": props.width_1_1_s},
        {"uk-width-1-2@s": props.width_1_2_s},
        {"uk-width-1-3@s": props.width_1_3_s},
        {"uk-width-2-3@s": props.width_2_3_s},
        {"uk-width-1-4@s": props.width_1_4_s},
        {"uk-width-3-4@s": props.width_3_4_s},
        {"uk-width-1-5@s": props.width_1_5_s},
        {"uk-width-4-5@s": props.width_4_5_s},
        {"uk-width-1-6@s": props.width_1_6_s},
        {"uk-width-5-6@s": props.width_5_6_s},

        // Affects device widths of 960px and larger. Grid columns will stack on smaller sizes.
        {"uk-width-1-1@m": props.width_1_1_m},
        {"uk-width-1-2@m": props.width_1_2_m},
        {"uk-width-1-3@m": props.width_1_3_m},
        {"uk-width-2-3@m": props.width_2_3_m},
        {"uk-width-1-4@m": props.width_1_4_m},
        {"uk-width-3-4@m": props.width_3_4_m},
        {"uk-width-1-5@m": props.width_1_5_m},
        {"uk-width-4-5@m": props.width_4_5_m},
        {"uk-width-1-6@m": props.width_1_6_m},
        {"uk-width-5-6@m": props.width_5_6_m},

        // Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes.
        {"uk-width-1-1@l": props.width_1_1_l},
        {"uk-width-1-2@l": props.width_1_2_l},
        {"uk-width-1-3@l": props.width_1_3_l},
        {"uk-width-2-3@l": props.width_2_3_l},
        {"uk-width-1-4@l": props.width_1_4_l},
        {"uk-width-3-4@l": props.width_3_4_l},
        {"uk-width-1-5@l": props.width_1_5_l},
        {"uk-width-4-5@l": props.width_4_5_l},
        {"uk-width-1-6@l": props.width_1_6_l},
        {"uk-width-5-6@l": props.width_5_6_l},

        // Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes.
        {"uk-width-1-1@xl": props.width_1_1_xl},
        {"uk-width-1-2@xl": props.width_1_2_xl},
        {"uk-width-1-3@xl": props.width_1_3_xl},
        {"uk-width-2-3@xl": props.width_2_3_xl},
        {"uk-width-1-4@xl": props.width_1_4_xl},
        {"uk-width-3-4@xl": props.width_3_4_xl},
        {"uk-width-1-5@xl": props.width_1_5_xl},
        {"uk-width-4-5@xl": props.width_4_5_xl},
        {"uk-width-1-6@xl": props.width_1_6_xl},
        {"uk-width-5-6@xl": props.width_5_6_xl},
    )
};

applyWidth.propTypes = {
    // Affects all device widths, grid columns stay side by side.
    width_1_1: PropTypes.bool,
    width_1_2: PropTypes.bool,
    width_1_3: PropTypes.bool,
    width_2_3: PropTypes.bool,
    width_1_4: PropTypes.bool,
    width_3_4: PropTypes.bool,
    width_1_5: PropTypes.bool,
    width_4_5: PropTypes.bool,
    width_1_6: PropTypes.bool,
    width_5_6: PropTypes.bool,

    // Affects device widths of 640px and larger
    width_1_1_s: PropTypes.bool,
    width_1_2_s: PropTypes.bool,
    width_1_3_s: PropTypes.bool,
    width_2_3_s: PropTypes.bool,
    width_1_4_s: PropTypes.bool,
    width_3_4_s: PropTypes.bool,
    width_1_5_s: PropTypes.bool,
    width_4_5_s: PropTypes.bool,
    width_1_6_s: PropTypes.bool,
    width_5_6_s: PropTypes.bool,

    // Affects device widths of 960px and larger. Grid columns will stack on smaller sizes.
    width_1_1_m: PropTypes.bool,
    width_1_2_m: PropTypes.bool,
    width_1_3_m: PropTypes.bool,
    width_2_3_m: PropTypes.bool,
    width_1_4_m: PropTypes.bool,
    width_3_4_m: PropTypes.bool,
    width_1_5_m: PropTypes.bool,
    width_4_5_m: PropTypes.bool,
    width_1_6_m: PropTypes.bool,
    width_5_6_m: PropTypes.bool,

    // Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes.
    width_1_1_l: PropTypes.bool,
    width_1_2_l: PropTypes.bool,
    width_1_3_l: PropTypes.bool,
    width_2_3_l: PropTypes.bool,
    width_1_4_l: PropTypes.bool,
    width_3_4_l: PropTypes.bool,
    width_1_5_l: PropTypes.bool,
    width_4_5_l: PropTypes.bool,
    width_1_6_l: PropTypes.bool,
    width_5_6_l: PropTypes.bool,

    // Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes.
    width_1_1_xl: PropTypes.bool,
    width_1_2_xl: PropTypes.bool,
    width_1_3_xl: PropTypes.bool,
    width_2_3_xl: PropTypes.bool,
    width_1_4_xl: PropTypes.bool,
    width_3_4_xl: PropTypes.bool,
    width_1_5_xl: PropTypes.bool,
    width_4_5_xl: PropTypes.bool,
    width_1_6_xl: PropTypes.bool,
    width_5_6_xl: PropTypes.bool,
};

applyWidth.defaultProps = {
    // Affects all device widths, grid columns stay side by side.
    width_1_1: false,
    width_1_2: false,
    width_1_3: false,
    width_2_3: false,
    width_1_4: false,
    width_3_4: false,
    width_1_5: false,
    width_4_5: false,
    width_1_6: false,
    width_5_6: false,

    // Affects device widths of 640px and larger
    width_1_1_s: false,
    width_1_2_s: false,
    width_1_3_s: false,
    width_2_3_s: false,
    width_1_4_s: false,
    width_3_4_s: false,
    width_1_5_s: false,
    width_4_5_s: false,
    width_1_6_s: false,
    width_5_6_s: false,

    // Affects device widths of 960px and larger. Grid columns will stack on smaller sizes.
    width_1_1_m: false,
    width_1_2_m: false,
    width_1_3_m: false,
    width_2_3_m: false,
    width_1_4_m: false,
    width_3_4_m: false,
    width_1_5_m: false,
    width_4_5_m: false,
    width_1_6_m: false,
    width_5_6_m: false,

    // Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes.
    width_1_1_l: false,
    width_1_2_l: false,
    width_1_3_l: false,
    width_2_3_l: false,
    width_1_4_l: false,
    width_3_4_l: false,
    width_1_5_l: false,
    width_4_5_l: false,
    width_1_6_l: false,
    width_5_6_l: false,

    // Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes.
    width_1_1_xl: false,
    width_1_2_xl: false,
    width_1_3_xl: false,
    width_2_3_xl: false,
    width_1_4_xl: false,
    width_3_4_xl: false,
    width_1_5_xl: false,
    width_4_5_xl: false,
    width_1_6_xl: false,
    width_5_6_xl: false
};

export default applyWidth;
