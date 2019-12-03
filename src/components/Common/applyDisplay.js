import PropTypes from 'prop-types';
import classNames from "classnames";

const applyDisplay = (props) => {
    return classNames(" ",
        {"uk-display-block": props.displayBlock},
        {"uk-display-inline": props.displayInline},
        {"uk-display-inline-block": props.displayInlineBlock},
        " "
    );
};

applyDisplay.propTypes = {
    /** Forces the element to behave like a block element. */
    displayBlock: PropTypes.bool,
    /** Forces the element to behave like an inline element. */
    displayInline: PropTypes.bool,
    /** Forces the element to behave like an inline-block element. */
    displayInlineBlock: PropTypes.bool,
};

applyDisplay.defaultProps = {
    displayBlock: false,
    displayInline: false,
    displayInlineBlock: false,
};

export default applyDisplay;
