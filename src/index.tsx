import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers/rootReducer';
import App from './components/App';
import { Initializing } from './models/state';

const initialState: Initializing = {progress: 0};

const store = createStore(
                reducer,
                initialState,
                applyMiddleware(thunkMiddleware)
            );

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('example')
);
