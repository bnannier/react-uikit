import PropTypes from 'prop-types';
import classNames from "classnames";

const applyDrag = (props) => {
    return classNames(" ",
        {"uk-drag": props.drag},
        {"uk-dragover": props.dragOver},
        " "
    );
};

applyDrag.propTypes = {
    /** To apply a move cursor to elements that are being dragged, add the drag prop. */
    drag: PropTypes.bool,
    /** To create a box shadow on an upload area when dragging a file over it, add the dragOver prop. */
    dragOver: PropTypes.bool,
};

applyDrag.defaultProps = {
    drag: false,
    dragOver: false
};

export default applyDrag;
