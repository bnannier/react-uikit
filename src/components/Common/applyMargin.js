import PropTypes from 'prop-types';
import classNames from "classnames";

const applyMargin = (props) => {
    return classNames(" ",
        {"uk-margin": props.margin},
        {"uk-margin-top": props.marginTop},
        {"uk-margin-bottom": props.marginBottom},
        {"uk-margin-left": props.marginLeft},
        {"uk-margin-right": props.marginRight},

        {"uk-margin-small": props.marginSmall},
        {"uk-margin-small-top": props.marginSmallTop},
        {"uk-margin-small-bottom": props.marginSmallBottom},
        {"uk-margin-small-left": props.marginSmallLeft},
        {"uk-margin-small-right": props.marginSmallRight},

        {"uk-margin-medium": props.marginMedium},
        {"uk-margin-medium-top": props.marginMediumTop},
        {"uk-margin-medium-bottom": props.marginMediumBottom},
        {"uk-margin-medium-left": props.marginMediumLeft},
        {"uk-margin-medium-right": props.marginMediumRight},

        {"uk-margin-large": props.marginLarge},
        {"uk-margin-large-top": props.marginLargeTop},
        {"uk-margin-large-bottom": props.marginLargeBottom},
        {"uk-margin-large-left": props.marginLargeLeft},
        {"uk-margin-large-right": props.marginLargeRight},

        {"uk-margin-xlarge": props.marginXLarge},
        {"uk-margin-xlarge-top": props.marginXLargeTop},
        {"uk-margin-xlarge-bottom": props.marginXLargeBottom},
        {"uk-margin-xlarge-left": props.marginXLargeLeft},
        {"uk-margin-xlarge-right": props.marginXLargeRight},

        {"uk-margin-remove": props.marginRemove},
        {"uk-margin-remove-top": props.marginRemoveTop},
        {"uk-margin-remove-bottom": props.marginRemoveBottom},
        {"uk-margin-remove-left": props.marginRemoveLeft},
        {"uk-margin-remove-right": props.marginRemoveRight},
        {"uk-margin-remove-vertical": props.marginRemoveVertical},
        {"uk-margin-remove-adjacent": props.marginRemoveAdjacent},
        {"uk-margin-remove-first-child": props.marginRemoveFirstChild},
        {"uk-margin-remove-last-child": props.marginRemoveLastChild},

        {"uk-margin-remove-left@s": props.marginRemoveSmallLeft},
        {"uk-margin-remove-right@s": props.marginRemoveSmallRight},
        {"uk-margin-remove-left@m": props.marginRemoveMediumLeft},
        {"uk-margin-remove-right@m": props.marginRemoveMediumRight},
        {"uk-margin-remove-left@l": props.marginRemoveLargeLeft},
        {"uk-margin-remove-right@l": props.marginRemoveLargeRight},
        {"uk-margin-remove-left@xl": props.marginRemoveXLargeLeft},
        {"uk-margin-remove-right@xl": props.marginRemoveXLargeRight},

        {"uk-margin-auto": props.marginAuto},
        {"uk-margin-auto-top": props.marginAutoTop},
        {"uk-margin-auto-bottom": props.marginAutoBottom},
        {"uk-margin-auto-left": props.marginAutoLeft},
        {"uk-margin-auto-right": props.marginAutoRight},
        {"uk-margin-auto-vertical": props.marginAutoVertical},

        " "
    );
};

applyMargin.propTypes = {
    margin: PropTypes.bool,
    marginTop: PropTypes.bool,
    marginBottom: PropTypes.bool,
    marginLeft: PropTypes.bool,
    marginRight: PropTypes.bool,

    marginSmall: PropTypes.bool,
    marginSmallTop: PropTypes.bool,
    marginSmallBottom: PropTypes.bool,
    marginSmallLeft: PropTypes.bool,
    marginSmallRight: PropTypes.bool,

    marginMedium: PropTypes.bool,
    marginMediumTop: PropTypes.bool,
    marginMediumBottom: PropTypes.bool,
    marginMediumLeft: PropTypes.bool,
    marginMediumRight: PropTypes.bool,

    marginLarge: PropTypes.bool,
    marginLargeTop: PropTypes.bool,
    marginLargeBottom: PropTypes.bool,
    marginLargeLeft: PropTypes.bool,
    marginLargeRight: PropTypes.bool,

    marginXLarge: PropTypes.bool,
    marginXLargeTop: PropTypes.bool,
    marginXLargeBottom: PropTypes.bool,
    marginXLargeLeft: PropTypes.bool,
    marginXLargeRight: PropTypes.bool,

    marginRemove: PropTypes.bool,
    marginRemoveTop: PropTypes.bool,
    marginRemoveBottom: PropTypes.bool,
    marginRemoveLeft: PropTypes.bool,
    marginRemoveRight: PropTypes.bool,
    marginRemoveVertical: PropTypes.bool,
    marginRemoveAdjacent: PropTypes.bool,
    marginRemoveFirstChild: PropTypes.bool,
    marginRemoveLastChild: PropTypes.bool,

    marginRemoveSmallLeft: PropTypes.bool,
    marginRemoveSmallRight: PropTypes.bool,
    marginRemoveMediumLeft: PropTypes.bool,
    marginRemoveMediumRight: PropTypes.bool,
    marginRemoveLargeLeft: PropTypes.bool,
    marginRemoveLargeRight: PropTypes.bool,
    marginRemoveXLargeLeft: PropTypes.bool,
    marginRemoveXLargeRight: PropTypes.bool,

    marginAuto: PropTypes.bool,
    marginAutoTop: PropTypes.bool,
    marginAutoBottom: PropTypes.bool,
    marginAutoLeft: PropTypes.bool,
    marginAutoRight: PropTypes.bool,
    marginAutoVertical: PropTypes.bool,


};

applyMargin.defaultProps = {
    margin: false,
    marginTop: false,
    marginBottom: false,
    marginLeft: false,
    marginRight: false,

    marginSmall: false,
    marginSmallTop: false,
    marginSmallBottom: false,
    marginSmallLeft: false,
    marginSmallRight: false,

    marginMedium: false,
    marginMediumTop: false,
    marginMediumBottom: false,
    marginMediumLeft: false,
    marginMediumRight: false,

    marginLarge: false,
    marginLargeTop: false,
    marginLargeBottom: false,
    marginLargeLeft: false,
    marginLargeRight: false,

    marginXLarge: false,
    marginXLargeTop: false,
    marginXLargeBottom: false,
    marginXLargeLeft: false,
    marginXLargeRight: false,

    marginRemove: false,
    marginRemoveTop: false,
    marginRemoveBottom: false,
    marginRemoveLeft: false,
    marginRemoveRight: false,
    marginRemoveVertical: false,
    marginRemoveAdjacent: false,
    marginRemoveFirstChild: false,
    marginRemoveLastChild: false,

    marginRemoveSmallLeft: false,
    marginRemoveSmallRight: false,
    marginRemoveMediumLeft: false,
    marginRemoveMediumRight: false,
    marginRemoveLargeLeft: false,
    marginRemoveLargeRight: false,
    marginRemoveXLargeLeft: false,
    marginRemoveXLargeRight: false,

    marginAuto: false,
    marginAutoTop: false,
    marginAutoBottom: false,
    marginAutoLeft: false,
    marginAutoRight: false,
    marginAutoVertical: false,



};

export default applyMargin;
