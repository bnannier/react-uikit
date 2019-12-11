import PropTypes from 'prop-types';
import classNames from "classnames";

const applyDisabled = (props) => {
    return classNames(" ",
        {"uk-disabled": props.disable},
        " "
    );
};

applyDisabled.propTypes = {
    /** To disable the click behavior of any element, like a <Link>, <Button> or <IFrame> element, add the disabled prop. */
    disable: PropTypes.bool
};

applyDisabled.defaultProps = {
    disable: false
};

export default applyDisabled;
