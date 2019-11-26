import PropTypes from 'prop-types';
import classNames from "classnames";

const applyMargin = (props) => {
    return classNames(" ",
        {"uk-margin": props.margin},
        {"uk-margin-top": props.marginTop},
        {"uk-margin-bottom": props.marginBottom},
        {"uk-margin-left": props.marginLeft},
        {"uk-margin-right": props.marginRight},
        " "
    );
};

applyMargin.propTypes = {
    margin:  PropTypes.bool,
    marginTop: PropTypes.bool,
    marginBottom: PropTypes.bool,
    marginLeft: PropTypes.bool,
    marginRight: PropTypes.bool
};

applyMargin.defaultProps = {
    margin: false,
    marginTop: false,
    marginBottom: false,
    marginLeft: false,
    marginRight: false
};

export default applyMargin;
