import PropTypes from 'prop-types';
import classNames from "classnames";

const applyText = (props) => {
    return classNames(" ",
        {"uk-text-left": props.textLeft},
        {"uk-text-right": props.textRight},
        {"uk-text-center": props.textCenter},
        {"uk-text-justify": props.textJustify},
        " "
    );
};

applyText.propTypes = {
    /** Aligns text to the left. */
    textLeft: PropTypes.bool,
    /** Aligns text to the right. */
    textRight: PropTypes.bool,
    /** Centers text horizontally. */
    textCenter: PropTypes.bool,
    /** Justifies text. */
    textJustify: PropTypes.bool,
};

applyText.defaultProps = {
    textLeft: false,
    textRight: false,
    textCenter: false,
    textJustify: false,
};

export default applyText;
