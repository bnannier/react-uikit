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
        {"uk-margin-small-top": props.marginTopSmall},
        {"uk-margin-small-bottom": props.marginBottomSmall},
        {"uk-margin-small-left": props.marginLeftSmall},
        {"uk-margin-small-right": props.marginRightSmall},

        {"uk-margin-medium": props.marginMedium},
        {"uk-margin-medium-top": props.marginTopMedium},
        {"uk-margin-medium-bottom": props.marginBottomMedium},
        {"uk-margin-medium-left": props.marginLeftMedium},
        {"uk-margin-medium-right": props.marginRightMedium},

        {"uk-margin-large": props.marginLarge},
        {"uk-margin-large-top": props.marginTopLarge},
        {"uk-margin-large-bottom": props.marginBottomLarge},
        {"uk-margin-large-left": props.marginLeftLarge},
        {"uk-margin-large-right": props.marginRightLarge},

        {"uk-margin-xlarge": props.marginXLarge},
        {"uk-margin-xlarge-top": props.marginTopXLarge},
        {"uk-margin-xlarge-bottom": props.marginBottomXLarge},
        {"uk-margin-xlarge-left": props.marginLeftXLarge},
        {"uk-margin-xlarge-right": props.marginRightXLarge},

        {"uk-margin-remove": props.marginRemove},
        {"uk-margin-remove-top": props.marginRemoveTop},
        {"uk-margin-remove-bottom": props.marginRemoveBottom},
        {"uk-margin-remove-left": props.marginRemoveLeft},
        {"uk-margin-remove-right": props.marginRemoveRight},
        {"uk-margin-remove-vertical": props.marginRemoveVertical},
        {"uk-margin-remove-adjacent": props.marginRemoveAdjacent},
        {"uk-margin-remove-first-child": props.marginRemoveFirstChild},
        {"uk-margin-remove-last-child": props.marginRemoveLastChild},

        {"uk-margin-remove-left@s": props.marginRemoveLeftSmall},
        {"uk-margin-remove-right@s": props.marginRemoveRightSmall},
        {"uk-margin-remove-left@m": props.marginRemoveLeftMedium},
        {"uk-margin-remove-right@m": props.marginRemoveRightMedium},
        {"uk-margin-remove-left@l": props.marginRemoveLeftLarge},
        {"uk-margin-remove-right@l": props.marginRemoveRightLarge},
        {"uk-margin-remove-left@xl": props.marginRemoveLeftXLarge},
        {"uk-margin-remove-right@xl": props.marginRemoveRightXLarge},

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
    marginTopSmall: PropTypes.bool,
    marginBottomSmall: PropTypes.bool,
    marginLeftSmall: PropTypes.bool,
    marginRightSmall: PropTypes.bool,

    marginMedium: PropTypes.bool,
    marginTopMedium: PropTypes.bool,
    marginBottomMedium: PropTypes.bool,
    marginLeftMedium: PropTypes.bool,
    marginRightMedium: PropTypes.bool,

    marginLarge: PropTypes.bool,
    marginTopLarge: PropTypes.bool,
    marginBottomLarge: PropTypes.bool,
    marginLeftLarge: PropTypes.bool,
    marginRightLarge: PropTypes.bool,

    marginXLarge: PropTypes.bool,
    marginTopXLarge: PropTypes.bool,
    marginBottomXLarge: PropTypes.bool,
    marginLeftXLarge: PropTypes.bool,
    marginRightXLarge: PropTypes.bool,

    marginRemove: PropTypes.bool,
    marginRemoveTop: PropTypes.bool,
    marginRemoveBottom: PropTypes.bool,
    marginRemoveLeft: PropTypes.bool,
    marginRemoveRight: PropTypes.bool,
    marginRemoveVertical: PropTypes.bool,
    marginRemoveAdjacent: PropTypes.bool,
    marginRemoveFirstChild: PropTypes.bool,
    marginRemoveLastChild: PropTypes.bool,

    marginRemoveLeftSmall: PropTypes.bool,
    marginRemoveRightSmall: PropTypes.bool,
    marginRemoveLeftMedium: PropTypes.bool,
    marginRemoveRightMedium: PropTypes.bool,
    marginRemoveLeftLarge: PropTypes.bool,
    marginRemoveRightLarge: PropTypes.bool,
    marginRemoveLeftXLarge: PropTypes.bool,
    marginRemoveRightXLarge: PropTypes.bool,

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
    marginTopSmall: false,
    marginBottomSmall: false,
    marginLeftSmall: false,
    marginRightSmall: false,

    marginMedium: false,
    marginMediumTop: false,
    marginMediumBottom: false,
    marginMediumLeft: false,
    marginMediumRight: false,

    marginLarge: false,
    marginTopLarge: false,
    marginBottomLarge: false,
    marginLeftLarge: false,
    marginRightLarge: false,

    marginXLarge: false,
    marginTopXLarge: false,
    marginBottomXLarge: false,
    marginLeftXLarge: false,
    marginRightXLarge: false,

    marginRemove: false,
    marginRemoveTop: false,
    marginRemoveBottom: false,
    marginRemoveLeft: false,
    marginRemoveRight: false,
    marginRemoveVertical: false,
    marginRemoveAdjacent: false,
    marginRemoveFirstChild: false,
    marginRemoveLastChild: false,

    marginRemoveLeftSmall: false,
    marginRemoveRightSmall: false,
    marginRemoveLeftMedium: false,
    marginRemoveRightMedium: false,
    marginRemoveLeftLarge: false,
    marginRemoveRightLarge: false,
    marginRemoveLeftXLarge: false,
    marginRemoveRightXLarge: false,

    marginAuto: false,
    marginAutoTop: false,
    marginAutoBottom: false,
    marginAutoLeft: false,
    marginAutoRight: false,
    marginAutoVertical: false,



};

export default applyMargin;
