import PropTypes from 'prop-types';

// We want to avoid adding custom styles, but sometimes we need to add custom style="" attributes, and these are covered here
const applyStyles = (props) => {
    let customStyles = {};

    if (props.height) {
        customStyles.height = props.height;
    }

    return customStyles;
};

applyStyles.propTypes = {
    height: PropTypes.string,
};

applyStyles.defaultProps = {
    height: undefined,
};

export default applyStyles;
