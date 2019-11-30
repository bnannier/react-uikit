import PropTypes from 'prop-types';
import classNames from "classnames";

const applyFlex = (props) => {
    return classNames(" ",
        {"uk-flex": props.flex},
        {"uk-flex-inline": props.flexInline},
        " "
    );
};

applyFlex.propTypes = {
    flex: PropTypes.bool,
    flexInline: PropTypes.bool
};

applyFlex.defaultProps = {
    flex: false,
    flexInline: false
};

export default applyFlex;