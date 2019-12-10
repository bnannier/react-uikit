import PropTypes from 'prop-types';
import classNames from "classnames";

const applyInverse = (props) => {
    return classNames(" ",
        {"uk-light": props.light},
        {"uk-dark": props.dark},
    );
};

applyInverse.propTypes = {
    /** Add the light prop to improve the visibility of objects on dark backgrounds in a light style. */
    light: PropTypes.bool,
    /** When using a dark style, add the dark class to elements on a light background. */
    dark: PropTypes.bool
};

applyInverse.defaultProps = {
    light: false,
    dark: false,
};

export default applyInverse;
