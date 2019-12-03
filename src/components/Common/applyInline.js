import PropTypes from 'prop-types';
import classNames from "classnames";

const applyInline = (props) => {
    return classNames(" ",
        {"uk-inline": props.displayBlock},
        {"uk-inline-clip": props.displayInline},
        " "
    );
};

applyInline.propTypes = {
    /** Add this prop to apply inline-block behavior to an element, add a max-width of 100% and to create a position context. */
    inline: PropTypes.bool,
    /** Same as inline, it but also clips overflowing child elements. */
    inlineClip: PropTypes.bool
};

applyInline.defaultProps = {
    inline: false,
    inlineClip: false,
};

export default applyInline;
