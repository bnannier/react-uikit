import PropTypes from 'prop-types';
import classNames from "classnames";

const applyAlign = (props) => {
    return classNames(" ",
        {"uk-align-left": props.alignLeft},
        {"uk-align-center": props.alignCenter},
        {"uk-align-right": props.alignRight},

        {"uk-align-left@s": props.alignLeftSmall},
        {"uk-align-right@s": props.alignRightSmall},

        {"uk-align-left@m": props.alignLeftMedium},
        {"uk-align-right@m": props.alignRightMedium},

        {"uk-align-left@l": props.alignLeftLarge},
        {"uk-align-right@l": props.alignRightLarge},

        {"uk-align-left@xl": props.alignLeftXLarge},
        {"uk-align-right@xl": props.alignRightXLarge},

        " "
    );
};

applyAlign.propTypes = {
    alignLeft: PropTypes.bool,
    alignCenter: PropTypes.bool,
    alignRight: PropTypes.bool,

    alignLeftSmall: PropTypes.bool,
    alignRightSmall: PropTypes.bool,

    alignLeftMedium: PropTypes.bool,
    alignRightMedium: PropTypes.bool,

    alignLeftLarge: PropTypes.bool,
    alignRightLarge: PropTypes.bool,

    alignLeftXLarge: PropTypes.bool,
    alignRightXLarge: PropTypes.bool,
};

applyAlign.defaultProps = {
    alignLeft: false,
    alignCenter: false,
    alignRight: false,

    alignLeftSmall: false,
    alignRightSmall: false,

    alignLeftMedium: false,
    alignRightMedium: false,

    alignLeftLarge: false,
    alignRightLarge: false,

    alignLeftXLarge: false,
    alignRightXLarge: false,
};

export default applyAlign;
