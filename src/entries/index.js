import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import AppContainer from '../components/app/App';

// Material UI Theme 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#3163db',
        accent1Color: '#9E9E9E'
    },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
