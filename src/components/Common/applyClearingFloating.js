import PropTypes from 'prop-types';
import classNames from "classnames";

const applyClearingFloating = (props) => {
    return classNames(" ",
        {"uk-float-left": props.floatLeft},
        {"uk-float-right": props.floatRight},
        {"uk-clearfix": props.clearFix},
        " "
    );
};

applyClearingFloating.propTypes = {
    /** Add this prop to float the element to the left. */
    floatLeft: PropTypes.bool,
    /** Add this prop to float the element to the right. */
    floatRight: PropTypes.bool,
    /** Add this prop to a parent container to clear floats. */
    clearFix: PropTypes.bool,
};

applyClearingFloating.defaultProps = {
    floatLeft: false,
    floatRight: false,
    clearFix: false,
};

export default applyClearingFloating;
