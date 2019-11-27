import PropTypes from 'prop-types';
import classNames from "classnames";

const applyBackground = (props) => {
    return classNames(" ",
        {"uk-background-default": props.backgroundDefault},
        {"uk-background-muted": props.backgroundMuted},
        {"uk-background-primary": props.backgroundPrimary},
        {"uk-background-secondary": props.backgroundSecondary},
        " "
    );
};

applyBackground.propTypes = {
    /** Applies the default background color. */
    backgroundDefault: PropTypes.bool,
    /** Applies a muted background color. */
    backgroundMuted: PropTypes.bool,
    /** Applies the primary background color. */
    backgroundPrimary: PropTypes.bool,
    /** Applies a secondary background color. */
    backgroundSecondary: PropTypes.bool
};

applyBackground.defaultProps = {
    backgroundDefault: false,
    backgroundMuted: false,
    backgroundPrimary: false,
    backgroundSecondary: false,
};

export default applyBackground;
