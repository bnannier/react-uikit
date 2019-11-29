import PropTypes from 'prop-types';
import classNames from "classnames";

const applyPanel = (props) => {
    return classNames(" ",
        {"uk-panel": props.panel},
        {"uk-panel-scrollable": props.scrollable},
        " "
    );
};

applyPanel.propTypes = {
    /** Add the .uk-panel class to a <div> element to create a position context, set box-sizing to border-box, apply a clearfix and to remove the bottom margin of its last child element. */
    panel: PropTypes.bool,
};

applyPanel.defaultProps = {
    panel: false,
};

export default applyPanel;
