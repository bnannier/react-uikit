import PropTypes from 'prop-types';
import classNames from "classnames";

const applyWidth = (props) => {
    return classNames(" ",
        {[`uk-width-${props.width}`] : props.width},
        {[`uk-width-small`] : props.widthSmall === true},
        {[`uk-width-${props.widthSmall}@s`] : (typeof props.widthSmall === "string")},
        {[`uk-width-medium`] : props.widthMedium === true},
        {[`uk-width-${props.widthMedium}@m`] : (typeof props.widthMedium === "string")},
        {[`uk-width-large`] : props.widthLarge === true},
        {[`uk-width-${props.widthLarge}@l`] : (typeof props.widthLarge === "string")},
        {[`uk-width-xlarge`] : props.widthXLarge === true},
        {[`uk-width-${props.widthXLarge}@xl`] : (typeof props.widthXLarge === "string")},
        {[`uk-width-xxlarge`] : props.widthXXLarge === true},

        {[`uk-width-auto`] : props.widthAuto},
        {[`uk-width-auto@s`] : props.widthAutoSmall},
        {[`uk-width-auto@m`] : props.widthAutoMedium},
        {[`uk-width-auto@l`] : props.widthAutoLarge},
        {[`uk-width-auto@xl`] : props.widthAutoXLarge},

        {[`uk-width-expand`] : props.widthExpand},
        {[`uk-width-expand@s`] : props.widthExpandSmall},
        {[`uk-width-expand@m`] : props.widthExpandMedium},
        {[`uk-width-expand@l`] : props.widthExpandLarge},
        {[`uk-width-expand@xl`] : props.widthExpandXLarge},

        {[`uk-child-width-${props.childWidth}`] : props.childWidth},
        {[`uk-child-width-auto`] : props.childWidthAuto},
        {[`uk-child-width-expand`] : props.childWidthExpand},
        " "
    )
};

applyWidth.propTypes = {
    /** Affects all device widths, grid columns stay side by side */
    width: PropTypes.string,
    /** Affects device widths of 640px and larger. Grid columns will stack on smaller sizes */
    widthSmall: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    /** Affects device widths of 960px and larger. Grid columns will stack on smaller sizes */
    widthMedium: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    /** Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes */
    widthLarge: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    /** Applies a fixed width of 750px. */
    widthXLarge: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    /** Applies a fixed width of 750px. */
    widthXXLarge: PropTypes.bool,

    /** */
    widthAuto: PropTypes.bool,
    /** */
    widthAutoSmall: PropTypes.bool,
    /** */
    widthAutoMedium: PropTypes.bool,
    /** */
    widthAutoLarge: PropTypes.bool,
    /** */
    widthAutoXLarge: PropTypes.bool,

    /** */
    widthExpand: PropTypes.bool,
    /** */
    widthExpandSmall: PropTypes.bool,
    /** */
    widthExpandMedium: PropTypes.bool,
    /** */
    widthExpandLarge: PropTypes.bool,
    /** */
    widthExpandXLarge: PropTypes.bool,

    /** Child elements' are evenly split */
    childWidth: PropTypes.string,
    /** Divides the grid into equal units depending on the content size */
    childWidthAuto: PropTypes.bool,
    /** Divides the grid into equal units depending on the available space */
    childWidthExpand: PropTypes.bool
};

applyWidth.defaultProps = {
    width: "",
    widthSmall: "",
    widthMedium: "",
    widthLarge: "",
    widthXLarge: "",
    widthXXLarge: "",

    widthAuto: false,
    widthAutoSmall: false,
    widthAutoMedium: false,
    widthAutoLarge: false,
    widthAutoXLarge: false,

    widthExpand: false,
    widthExpandSmall: false,
    widthExpandMedium: false,
    widthExpandLarge: false,
    widthExpandXLarge: false,

    childWidth: "",
    childWidthAuto: false,
    childWidthExpand: false,
};

export default applyWidth;
