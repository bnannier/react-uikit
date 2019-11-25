import PropTypes from 'prop-types';

const applyWidth = (props) => {
    let str = " uk-width-";

    // Affects all device widths, grid columns stay side by side.
    if (props.width) {
        str += props.width + " ";
    }

    // Affects device widths of 640px and larger. Grid columns will stack on smaller sizes.
    if (props.widthS) {
        str += props.widthS + "@s ";
    }

    // Affects device widths of 960px and larger. Grid columns will stack on smaller sizes.
    if (props.widthM) {
        str += props.widthM + "@m ";
    }

    // Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes.
    if (props.widthL) {
        str += props.widthL + "@l ";
    }

    // Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes.
    if (props.widthXL) {
        str += props.widthXL + "@xl ";
    }

    return str;
};

applyWidth.propTypes = {
    /** Affects all device widths, grid columns stay side by side */
    width: PropTypes.string,
    /** Affects device widths of 640px and larger. Grid columns will stack on smaller sizes */
    widthS: PropTypes.string,
    /** Affects device widths of 960px and larger. Grid columns will stack on smaller sizes */
    widthM: PropTypes.string,
    /** Affects device widths of 1200px and larger. Grid columns will stack on smaller sizes */
    widthL: PropTypes.string,
    /** Affects device widths of 1600px and larger. Grid columns will stack on smaller sizes */
    widthXL: PropTypes.string
};

applyWidth.defaultProps = {
    width: "",
    widthS: "",
    widthM: "",
    widthL: "",
    widthXL: ""
};

export default applyWidth;
