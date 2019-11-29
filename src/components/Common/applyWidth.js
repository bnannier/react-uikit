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
        {[`uk-child-width-small`] : props.childWidthSmall === true},
        {[`uk-child-width-${props.childWidthSmall}@s`] : (typeof props.childWidthSmall === "string")},
        {[`uk-child-width-medium`] : props.childWidthMedium === true},
        {[`uk-child-width-${props.childWidthMedium}@m`] : (typeof props.childWidthMedium === "string")},
        {[`uk-child-width-large`] : props.childWidthLarge === true},
        {[`uk-child-width-${props.childWidthLarge}@l`] : (typeof props.childWidthLarge === "string")},
        {[`uk-child-width-xlarge`] : props.childWidthXLarge === true},
        {[`uk-child-width-${props.childWidthXLarge}@xl`] : (typeof props.childWidthXLarge === "string")},
        {[`uk-child-width-xxlarge`] : props.widthXXLarge === true},

        {[`uk-child-width-auto`] : props.childWidthAuto},
        {[`uk-child-width-auto@s`] : props.childWidthAutoSmall},
        {[`uk-child-width-auto@m`] : props.childWidthAutoMedium},
        {[`uk-child-width-auto@l`] : props.childWidthAutoLarge},
        {[`uk-child-width-auto@xl`] : props.childWidthAutoXLarge},

        {[`uk-child-width-expand`] : props.childWidthExpand},
        {[`uk-child-width-expand@s`] : props.childWidthExpandSmall},
        {[`uk-child-width-expand@m`] : props.childWidthExpandMedium},
        {[`uk-child-width-expand@l`] : props.childWidthExpandLarge},
        {[`uk-child-width-expand@xl`] : props.childWidthExpandXLarge},

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
    /** */
    childWidthSmall: PropTypes.string,
    /** */
    childWidthMedium: PropTypes.string,
    /** */
    childWidthLarge: PropTypes.string,
    /** */
    childWidthXLarge: PropTypes.string,
    /** */
    childWidthXXLarge: PropTypes.string,

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
    childWidthSmall: "",
    childWidthMedium: "",
    childWidthLarge: "",
    childWidthXLarge: "",
    childWidthXXLarge: "",

    childWidthAuto: false,
    childWidthAutoSmall: false,
    childWidthAutoMedium: false,
    childWidthAutoLarge: false,
    childWidthAutoXLarge: false,

    childWidthExpand: false,
    childWidthExpandSmall: false,
    childWidthExpandMedium: false,
    childWidthExpandLarge: false,
    childWidthExpandXLarge: false,
};

export default applyWidth;
