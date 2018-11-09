import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCuentas } from '../../../actions/AppActions';
import { isEmpty } from '../../../functions/isEmpty';
import './Cuentas.css';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Cuentas extends React.Component {
    constructor() {
        super();
        this.state = {
        };

    }

    componentDidMount() {
        this.props.fetchCuentas()
    }

    render() {
        if (!isEmpty(this.props.cuentas)) {
            var rows = this.props.cuentas.map((item) => {
                return (
                    <TableRow key={item.id}>
                        <TableRowColumn>{item.id}</TableRowColumn>
                        <TableRowColumn>{item.labels.name}</TableRowColumn>
                        <TableRowColumn>{item.labels.created}</TableRowColumn>
                    </TableRow>
                )
            })
        }

        var tableHeaderColumns = ['Id', 'Nombre', 'Creado']

        return (

            <Table multiSelectable={true}>
                <TableHeader>
                    <TableRow>
                        {
                            tableHeaderColumns.map((item) => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    cuentas: state.appReducer.cuentas,
});

const mapDispatchToProps = dispatch => ({
    fetchCuentas: () => dispatch(fetchCuentas()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cuentas);



