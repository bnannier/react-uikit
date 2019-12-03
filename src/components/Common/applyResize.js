import PropTypes from 'prop-types';
import classNames from "classnames";

const applyResize = (props) => {
    return classNames(" ",
        {"uk-resize": props.resize},
        {"uk-resize-vertical": props.resizeVertical},
        " "
    );
};

applyResize.propTypes = {
    /** Add this prop to enable horizontal and vertical resizing. */
    resize: PropTypes.bool,
    /** Add this prop to enable only vertical resizing. */
    resizeVertical: PropTypes.bool,
};

applyResize.defaultProps = {
    resize: false,
    resizeVertical: false,
};

export default applyResize;
