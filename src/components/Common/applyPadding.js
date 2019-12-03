import PropTypes from 'prop-types';
import classNames from "classnames";

const applyPadding = (props) => {
    return classNames(" ",
        {"uk-padding": props.padding},
        {"uk-padding-small": props.paddingSmall},
        {"uk-padding-large": props.paddingLarge},

        {"uk-padding-remove": props.paddingRemove},
        {"uk-padding-remove-top": props.paddingRemoveTop},
        {"uk-padding-remove-bottom": props.paddingRemoveBottom},
        {"uk-padding-remove-left": props.paddingRemoveLeft},
        {"uk-padding-remove-right": props.paddingRemoveRight},
        {"uk-padding-remove-vertical": props.paddingRemoveVerticle},
        {"uk-padding-remove-horizontal": props.paddingRemoveHorizontal},
        " "
    );
};

applyPadding.propTypes = {
    /** Adds default padding to the element. */
    padding: PropTypes.bool,
    /** Adds small padding to the element. */
    paddingSmall: PropTypes.bool,
    /** Adds large padding to the element. */
    paddingLarge: PropTypes.bool,

    /** Removes all padding from an element. */
    paddingRemove: false,
    /** Removes top padding from an element. */
    paddingRemoveTop: false,
    /** Removes bottom padding from an element. */
    paddingRemoveBottom: false,
    /** Removes left padding from an element. */
    paddingRemoveLeft: false,
    /** Removes right padding from an element. */
    paddingRemoveRight: false,
    /** Removes top and bottom padding from an element. */
    paddingRemoveVerticle: false,
    /** Removes left and right padding from an element. */
    paddingRemoveHorizontal: false,
};

applyPadding.defaultProps = {
    padding: false,
    paddingSmall: false,
    paddingLarge: false,

    paddingRemove: false,
    paddingRemoveTop: false,
    paddingRemoveBottom: false,
    paddingRemoveLeft: false,
    paddingRemoveRight: false,
    paddingRemoveVerticle: false,
    paddingRemoveHorizontal: false,
};

export default applyPadding;
