import PropTypes from 'prop-types';

const applyText = (props) => {
    let str = "";

    if(props.textLeft){
        str += "uk-text-left"
    }else if(props.textRight){
        str += "uk-text-right"
    }else if(props.textCenter){
        str += "uk-text-center"
    }else if(props.textJustify){
        str += "uk-text-justify"
    }


    return str;
};

applyText.propTypes = {
    /** Aligns text to the left. */
    textLeft: PropTypes.bool,
    /** Aligns text to the right. */
    textRight: PropTypes.bool,
    /** Centers text horizontally. */
    textCenter: PropTypes.bool,
    /** Justifies text. */
    textJustify: PropTypes.bool,
};

applyText.defaultProps = {
    textLeft: false,
    textRight: false,
    textCenter: false,
    textJustify: false,
};

export default applyText;