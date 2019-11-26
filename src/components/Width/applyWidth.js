import PropTypes from 'prop-types';

const applyWidth = (props) => {
    let str = "";

    if(props.child){
        str = " uk-child-width-";
        if(props.auto){
            str += "auto ";
        }else if(props.expand){
            str += "expand ";
        }
    }else if (props.width || props.widthSmall || props.widthMedium || props.widthLarge || props.widthXLarge){
        str = " uk-width-";
    }

    // Affects all device widths, grid columns stay side by side.
    if (props.width) {
        str += props.width + " ";
    }

    // Affects device widths of 640px and larger. Grid columns will stack on smaller sizes.
    if (props.widthSmall) {
        str += props.widthSmall + "@s ";
    }

    // Affects device widths of 960px and larger. Grid columns will stack on smaller sizes.
    if (props.widthMedium) {
        str += props.widthMedium + "@m ";
    }

    // Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes.
    if (props.widthLarge) {
        str += props.widthLarge + "@l ";
    }

    // Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes.
    if (props.widthXLarge) {
        str += props.widthXLarge + "@xl ";
    }

    return str;
};

applyWidth.propTypes = {
    /** Affects all device widths, grid columns stay side by side */
    width: PropTypes.string,
    /** Affects device widths of 640px and larger. Grid columns will stack on smaller sizes */
    widthSmall: PropTypes.string,
    /** Affects device widths of 960px and larger. Grid columns will stack on smaller sizes */
    widthMedium: PropTypes.string,
    /** Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes */
    widthLarge: PropTypes.string,
    /** Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes */
    widthXLarge: PropTypes.string,
    /** Child elements' are evenly split */
    child: PropTypes.bool,
    /** Divides the grid into equal units depending on the content size */
    auto: PropTypes.bool,
    /** Divides the grid into equal units depending on the available space */
    expand: PropTypes.bool
};

applyWidth.defaultProps = {
    width: "",
    widthSmall: "",
    widthMedium: "",
    widthLarge: "",
    widthXLarge: "",
    child: false,
    auto: false,
    expand: false,
};

export default applyWidth;
