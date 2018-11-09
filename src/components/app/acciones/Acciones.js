import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAcciones } from '../../../actions/AppActions';
import { isEmpty } from '../../../functions/isEmpty';
import './Acciones.css';

import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

class Acciones extends React.Component {
	constructor() {
		super();
		this.state = {
		};

	}

	componentDidMount() {
		this.props.fetchAcciones()
	}

	render() {
		if (!isEmpty(this.props.acciones)) {
			var rows = this.props.acciones.map((item) => {
				return (
					<TableRow key={item.id}>
						<TableRowColumn>{item.labels.created}</TableRowColumn>
						<TableRowColumn>{item.source}</TableRowColumn>
						<TableRowColumn>{item.target}</TableRowColumn>
						<TableRowColumn>{item.amount}</TableRowColumn>
						<TableRowColumn>{item.symbol}</TableRowColumn>
					</TableRow>
				)
			})
		}

		var tableHeaderColumns = ['Fecha', 'Origen', 'Destino', 'Monto', 'Moneda']

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
	acciones: state.appReducer.acciones,
});

const mapDispatchToProps = dispatch => ({
	fetchAcciones: () => dispatch(fetchAcciones()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Acciones);



