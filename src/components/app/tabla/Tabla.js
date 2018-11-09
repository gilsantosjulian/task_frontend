import React, { Component } from 'react';
import './Tabla.css';

import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

class Tabla extends React.Component {

	render() {
		console.log('this.props')
		console.log(this.props)
		return (
			<Table multiSelectable={true}>
				<TableHeader>
					<TableRow>
						{
							this.props.tableHeaderColumns
								? this.props.tableHeaderColumns.map((item) => {
									<TableHeaderColumn>{item}</TableHeaderColumn>
								})
								: null
						}
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						{
							this.props.tableRows
								? this.props.tableRows.map((item) => {
									<TableRowColumn>{item}</TableRowColumn>
								})
								: null
						}
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

export default Tabla;



