import PropTypes from 'prop-types';
import classNames from "classnames";

const applyOverlay = (props) => {
    return classNames(" ",
        {"uk-overlay": props.overlay},
        {"uk-overlay-default": props.overlayDefault},
        {"uk-overlay-primary": props.overlayPrimary},
        " "
    );
};

applyOverlay.propTypes = {
    /** Add the overlay prop to an element following an image to create the overlay panel. */
    overlay: PropTypes.bool,
    overlayDefault: PropTypes.bool,
    overlayPrimary: PropTypes.bool,
};

applyOverlay.defaultProps = {
    overlay: false,
    overlayDefault: false,
    overlayPrimary: false,
};

export default applyOverlay;
