import PropTypes from 'prop-types';
import classNames from "classnames";

const applyPanel = (props) => {
    return classNames(" ",
        {"uk-panel": props.panel},
        " "
    );
};

applyPanel.propTypes = {
    /** Aligns text to the left. */
    panel: PropTypes.bool,
};

applyPanel.defaultProps = {
    panel: false,
};

export default applyPanel;
