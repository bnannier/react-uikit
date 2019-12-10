import PropTypes from 'prop-types';
import classNames from "classnames";

const applyResponsive = (props) => {
    return classNames(" ",
        {"uk-responsive-width": props.responsiveWidth},
        {"uk-responsive-height": props.responsiveHeight},
        {"uk-preserve-width": props.preserveWidth},
        " "
    );
};

applyResponsive.propTypes = {
    responsiveWidth: PropTypes.bool,
    responsiveHeight: PropTypes.bool,
    preserveWidth: PropTypes.bool,
};

applyResponsive.defaultProps = {
    responsiveWidth: false,
    responsiveHeight: false,
    preserveWidth: false,
};

export default applyResponsive;
