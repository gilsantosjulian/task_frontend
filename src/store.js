import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers'; 
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

const loggerMiddleware = createLogger();
const reduxRouterMiddleware = syncHistory(browserHistory);

export default createStore(reducers,
    compose(
        applyMiddleware(
            reduxRouterMiddleware,
            thunkMiddleware,
            loggerMiddleware,
        ),
    ),
);
