import classNames from "classnames";
import applyResponsive from "./applyResponsive";

const applyAll = (props) => {
    return classNames(
        applyResponsive(props)
    );
};

export default applyAll;
