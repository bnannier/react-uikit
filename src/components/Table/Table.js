import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const Table = (props) =>{
    return (
        <table className={applyClasses(props)}>{
            buildTable(props.data)
        }</table>
    )
};

const buildTable = (data) => {
    return (
        <React.Fragment>
            <thead>
                <tr>{buildHeader(data.header)}</tr>
            </thead>
            <tfoot>
                <tr>{buildFooter(data.footer)}</tr>
            </tfoot>
            <tbody>
                {buildBody(data.body)}
            </tbody>
        </React.Fragment>
    )
};

const buildHeader = (header) => {
    let items = [];
    for(let i=0; i<header.length; i++){
        items.push(<th key={`header- ${i}`}>{header[i]}</th>)
    }
    return items;
};

const buildFooter = (footer) => {
    let items = [];
    for(let i=0; i<footer.length; i++){
        items.push(<td key={`footer- ${i}`}>{footer[i]}</td>)
    }
    return items;
};

const buildBody = (body) => {
    let items = [];
    for(let i=0; i<body.length; i++){
        items.push(<tr key={`body- ${i}`}>{buildRow(body[i])}</tr>)
    }
    return items;
};

const buildRow = (row) => {
    let items = [];
    for(let i=0; i<row.length; i++){
        items.push(<td key={`body-row- ${i}`}>{row[i]}</td>)
    }
    return items;
};

const applyClasses = (props) => {
    return classNames(" uk-table",
        {"uk-table-striped": props.striped},
        {"uk-table-condensed": props.condensed},
        " "
    )
};

Table.propTypes = {
    /**  */
    striped: PropTypes.bool,
    /**  */
    condensed: PropTypes.bool,
    /**  */
    data: PropTypes.object,
};

export default Table;
