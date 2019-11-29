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

        " "
    );
};

applyMargin.propTypes = {
    margin:  PropTypes.bool,
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
    marginXLargeRight: PropTypes.bool
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







};

export default applyMargin;
