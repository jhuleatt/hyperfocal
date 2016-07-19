import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers/rootReducer';
import App from './components/App';
import { State } from './models/redux';

let store = createStore(
                reducer,
                new State(),
                applyMiddleware(thunkMiddleware)
            );

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('example')
);
