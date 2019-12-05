import PropTypes from 'prop-types';

// We want to avoid adding custom styles, but sometimes we need to add custom style="" attributes, and these are covered here
const applyCustomStyles = (props) => {
    let customStyles = {};

    if (props.height) {
        customStyles.height = props.height;
    }

    return customStyles;
};

applyCustomStyles.propTypes = {
    height: PropTypes.string,
};

applyCustomStyles.defaultProps = {
    height: undefined,
};

export default applyCustomStyles;
