import PropTypes from 'prop-types';
import classNames from "classnames";

const applyFlex = (props) => {
    return classNames(" ",
        {"uk-flex": props.flex},
        {"uk-flex-left": props.flexLeft},
        {"uk-flex-center": props.flexCenter},
        {"uk-flex-right": props.flexRight},
        {"uk-flex-between": props.flexBetween},
        {"uk-flex-around": props.flexAround},

        {"uk-flex@s": props.flexSmall},
        {"uk-flex-left@s": props.flexLeftSmall},
        {"uk-flex-center@s": props.flexCenterSmall},
        {"uk-flex-right@s": props.flexRightSmall},
        {"uk-flex-between@s": props.flexBetweenSmall},
        {"uk-flex-around@s": props.flexAroundSmall},

        {"uk-flex@m": props.flexMedium},
        {"uk-flex-left@m": props.flexLeftMedium},
        {"uk-flex-center@m": props.flexCenterMedium},
        {"uk-flex-right@m": props.flexRightMedium},
        {"uk-flex-between@m": props.flexBetweenMedium},
        {"uk-flex-around@m": props.flexAroundMedium},

        {"uk-flex@l": props.flexLarge},
        {"uk-flex-left@l": props.flexLeftLarge},
        {"uk-flex-center@l": props.flexCenterLarge},
        {"uk-flex-right@l": props.flexRightLarge},
        {"uk-flex-between@l": props.flexBetweenLarge},
        {"uk-flex-around@l": props.flexAroundLarge},

        {"uk-flex@xl": props.flexXLarge},
        {"uk-flex-left@xl": props.flexLeftXLarge},
        {"uk-flex-center@xl": props.flexCenterXLarge},
        {"uk-flex-right@xl": props.flexRightXLarge},
        {"uk-flex-between@xl": props.flexBetweenXLarge},
        {"uk-flex-around@xl": props.flexAroundXLarge},

        {"uk-flex-inline": props.flexInline},

        {"uk-flex-stretch": props.flexStretch},
        {"uk-flex-top": props.flexTop},
        {"uk-flex-middle": props.flexMiddle},
        {"uk-flex-bottom": props.flexBottom},

        {"uk-flex-row": props.flexRow},
        {"uk-flex-row-reverse": props.flexRowReverse},
        {"uk-flex-column": props.flexColumn},
        {"uk-flex-column-reverse": props.flexColumnReverse},

        {"uk-flex-wrap": props.flexWrap},
        {"uk-flex-wrap-reverse": props.flexWrapReverse},
        {"uk-flex-nowrap": props.flexNoWrap},

        {"uk-flex-wrap-": props.flexWrapStretch},
        {"uk-flex-wrap-between": props.flexWrapBetween},
        {"uk-flex-wrap-around": props.flexWrapAround},
        {"uk-flex-wrap-top": props.flexWrapTop},
        {"uk-flex-wrap-middle": props.flexWrapMiddle},
        {"uk-flex-wrap-bottom": props.flexWrapBottom},

        {"uk-flex-first": props.flexFirst},
        {"uk-flex-first@s": props.flexFirstSmall},
        {"uk-flex-first@m": props.flexFirstMedium},
        {"uk-flex-first@l": props.flexFirstLarge},
        {"uk-flex-first@xl": props.flexFirstXLarge},

        {"uk-flex-last": props.flexLast},
        {"uk-flex-last@s": props.flexLastSmall},
        {"uk-flex-last@m": props.flexLastMedium},
        {"uk-flex-last@l": props.flexLastLarge},
        {"uk-flex-last@xl": props.flexLastXLarge},

        {"uk-flex-none": props.flexNone},
        {"uk-flex-auto": props.flexAuto},
        {"uk-flex-1": props.flex1},

        " "
    );
};

applyFlex.propTypes = {
    flex: PropTypes.bool,
    flexLeft: PropTypes.bool,
    flexCenter: PropTypes.bool,
    flexRight: PropTypes.bool,
    flexBetween: PropTypes.bool,
    flexAround: PropTypes.bool,

    flexSmall: PropTypes.bool,
    flexLeftSmall: PropTypes.bool,
    flexCenterSmall: PropTypes.bool,
    flexRightSmall: PropTypes.bool,
    flexBetweenSmall: PropTypes.bool,
    flexAroundSmall: PropTypes.bool,

    flexMedium: PropTypes.bool,
    flexLeftMedium: PropTypes.bool,
    flexCenterMedium: PropTypes.bool,
    flexRightMedium: PropTypes.bool,
    flexBetweenMedium: PropTypes.bool,
    flexAroundMedium: PropTypes.bool,

    flexLarge: PropTypes.bool,
    flexLeftLarge: PropTypes.bool,
    flexCenterLarge: PropTypes.bool,
    flexRightLarge: PropTypes.bool,
    flexBetweenLarge: PropTypes.bool,
    flexAroundLarge: PropTypes.bool,

    flexXLarge: PropTypes.bool,
    flexLeftXLarge: PropTypes.bool,
    flexCenterXLarge: PropTypes.bool,
    flexRightXLarge: PropTypes.bool,
    flexBetweenXLarge: PropTypes.bool,
    flexAroundXLarge: PropTypes.bool,

    flexInline: PropTypes.bool,

    flexStretch: PropTypes.bool,
    flexTop: PropTypes.bool,
    flexMiddle: PropTypes.bool,
    flexBottom: PropTypes.bool,

    flexRow: PropTypes.bool,
    flexRowReverse: PropTypes.bool,
    flexColumn: PropTypes.bool,
    flexColumnReverse: PropTypes.bool,

    flexWrap: PropTypes.bool,
    flexWrapReverse: PropTypes.bool,
    flexNoWrap: PropTypes.bool,

    flexWrapStretch: PropTypes.bool,
    flexWrapBetween: PropTypes.bool,
    flexWrapAround: PropTypes.bool,
    flexWrapTop: PropTypes.bool,
    flexWrapMiddle: PropTypes.bool,
    flexWrapBottom: PropTypes.bool,

    flexFirst: PropTypes.bool,
    flexFirstSmall: PropTypes.bool,
    flexFirstMedium: PropTypes.bool,
    flexFirstLarge: PropTypes.bool,
    flexFirstXLarge: PropTypes.bool,

    flexLast: PropTypes.bool,
    flexLastSmall: PropTypes.bool,
    flexLastMedium: PropTypes.bool,
    flexLastLarge: PropTypes.bool,
    flexLastXLarge: PropTypes.bool,

    flexNone: PropTypes.bool,
    flexAuto: PropTypes.bool,
    flex1: PropTypes.bool,
};

applyFlex.defaultProps = {
    flex: false,
    flexLeft: false,
    flexCenter: false,
    flexRight: false,
    flexBetween: false,
    flexAround: false,

    flexSmall: false,
    flexLeftSmall: false,
    flexCenterSmall: false,
    flexRightSmall: false,
    flexBetweenSmall: false,
    flexAroundSmall: false,

    flexMedium: false,
    flexLeftMedium: false,
    flexCenterMedium: false,
    flexRightMedium: false,
    flexBetweenMedium: false,
    flexAroundMedium: false,

    flexLarge: false,
    flexLeftLarge: false,
    flexCenterLarge: false,
    flexRightLarge: false,
    flexBetweenLarge: false,
    flexAroundLarge: false,

    flexXLarge: false,
    flexLeftXLarge: false,
    flexCenterXLarge: false,
    flexRightXLarge: false,
    flexBetweenXLarge: false,
    flexAroundXLarge: false,

    flexInline: false,

    flexStretch: false,
    flexTop: false,
    flexMiddle: false,
    flexBottom: false,

    flexRow: false,
    flexRowReverse: false,
    flexColumn: false,
    flexColumnReverse: false,

    flexWrap: false,
    flexWrapReverse: false,
    flexNoWrap: false,

    flexWrapStretch: false,
    flexWrapBetween: false,
    flexWrapAround: false,
    flexWrapTop: false,
    flexWrapMiddle: false,
    flexWrapBottom: false,

    flexFirst: false,
    flexFirstSmall: false,
    flexFirstMedium: false,
    flexFirstLarge: false,
    flexFirstXLarge: false,

    flexLast: false,
    flexLastSmall: false,
    flexLastMedium: false,
    flexLastLarge: false,
    flexLastXLarge: false,

    flexNone: false,
    flexAuto: false,
    flex1: false,
};

export default applyFlex;