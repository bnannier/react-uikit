import PropTypes from 'prop-types';
import classNames from "classnames";

const applyVisibility = (props) => {
    return classNames(" ",
        {"uk-hidden": props.hidden},
        {"uk-hidden@s": props.hiddenSmall},
        {"uk-hidden@m": props.hiddenMedium},
        {"uk-hidden@l": props.hiddenLarge},
        {"uk-hidden@xl": props.hiddenXLarge},
        {"uk-visible": props.visible},
        {"uk-visible@s": props.visibleSmall},
        {"uk-visible@m": props.visibleMedium},
        {"uk-visible@l": props.visibleLarge},
        {"uk-visible@xl": props.visibleXLarge},
        {"uk-invisible": props.invisible},
        " "
    );
};

applyVisibility.propTypes = {
    /** Hides the element on any device */
    hidden: PropTypes.bool,
    /** Only affects device widths of 640px and larger. */
    hiddenSmall: PropTypes.bool,
    /** Only affects device widths of 960px and larger. */
    hiddenMedium: PropTypes.bool,
    /** Only affects device widths of 1200px and larger. */
    hiddenLarge: PropTypes.bool,
    /** Only affects device widths of 1600px and larger. */
    hiddenXLarge: PropTypes.bool,
    /** Hides the element on any device */
    visible: PropTypes.bool,
    /** Only affects device widths of 640px and larger. */
    visibleSmall: PropTypes.bool,
    /** Only affects device widths of 960px and larger. */
    visibleMedium: PropTypes.bool,
    /** Only affects device widths of 1200px and larger. */
    visibleLarge: PropTypes.bool,
    /** Only affects device widths of 1600px and larger. */
    visibleXLarge: PropTypes.bool,
    /** Aligns text to the right. */
    invisible: PropTypes.bool
};

applyVisibility.defaultProps = {
    hidden: false,
    hiddenSmall: false,
    hiddenMedium: false,
    hiddenLarge: false,
    hiddenXLarge: false,
    visible: false,
    visibleSmall: false,
    visibleMedium: false,
    visibleLarge: false,
    visibleXLarge: false,
    invisible: false
};

export default applyVisibility;
