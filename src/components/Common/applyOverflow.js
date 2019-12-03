import PropTypes from 'prop-types';
import classNames from "classnames";

const applyOverflow = (props) => {
    return classNames(" ",
        {"uk-overflow-hidden": props.overflowHidden},
        {"uk-overflow-auto": props.overflowAuto},
        " "
    );
};

applyOverflow.propTypes = {
    /** Add this prop to clip content that exceeds the dimensions of its container. */
    overflowHidden: PropTypes.bool,
    /** Add this class to create a container that provides a horizontal or vertical scrollbar whenever the elements content it are wider or higher than the container itself. */
    overflowAuto: PropTypes.bool,
};

applyOverflow.defaultProps = {
    overflowHidden: false,
    overflowAuto: false,
};

export default applyOverflow;
