import React, { Component } from 'react';
import './App.css';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Acciones from '../app/acciones/Acciones';
import Cuentas from '../app/cuentas/Cuentas';

import img from '../../../public/logo.png';

const style = {
  color: 'white',

}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      show: null
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  showAcciones = () => { this.setState({ show: 'acciones', open: false }) }

  showCuentas = () => { this.setState({ show: 'cuentas', open: false }) }

  render() {
    let content = null;
    switch (this.state.show) {
      case 'acciones':
        content = <Acciones />;
        break;
      case 'cuentas':
        content = <Cuentas />;
        break;
      default:
        break;
    }

    return (
      <div className="App">
        <AppBar
          title="ACH logo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
          onClick={this.handleToggle}
          iconElementRight={
            <div style={{ color: 'white', marginTop: 7 }}>
              <span style={{ margin: '0 10px' }}>Pepito Pérez</span>
              <FlatButton id='logout' label="Logout" labelStyle={style.color} style={style.color} />
            </div>
          }
        />
        <Drawer
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          width={130}
        >
          <MenuItem id="showAcciones" onClick={this.showAcciones}>Acciones</MenuItem>
          <MenuItem id="showCuentas" onClick={this.showCuentas}>Cuentas</MenuItem>
        </Drawer>
        <Paper>
          {content}
        </Paper>
      </div>
    );
  }
}



export default App;
