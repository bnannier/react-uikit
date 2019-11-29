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
    panel: PropTypes.bool,
    scrollable: PropTypes.bool
};

applyPanel.defaultProps = {
    panel: false,
    scrollable: false
};

export default applyPanel;
