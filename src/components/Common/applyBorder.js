import PropTypes from 'prop-types';
import classNames from "classnames";

const applyBorder = (props) => {
    return classNames(" ",
        {"uk-border-rounded": props.borderRounded},
        {"uk-border-circle": props.borderCircle},
        {"uk-border-pill": props.borderPill},
        " "
    );
};

applyBorder.propTypes = {
    /** Add this prop to apply rounded corners. */
    borderRounded: PropTypes.bool,
    /** Add this prop to apply a circled shape. */
    borderCircle: PropTypes.bool,
    /** Add this prop to apply a pill shape. */
    borderPill: PropTypes.bool,
};

applyBorder.defaultProps = {
    borderRounded: false,
    borderCircle: false,
    borderPill: false,
};

export default applyBorder;
