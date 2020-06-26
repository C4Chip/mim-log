import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addCase } from './actions/mimCases';

// import IndecisionApp from './components/IndecisionApp';
//import 'normalize.css/normalize.css';
import './mimStyles/styles.scss';

const store = configureStore();

store.dispatch(addCase({mimNum:'mim123',events:['test1 \r','test2 \r','test3 \r'], createAt:1592911792000}));
store.dispatch(addCase({mimNum:'mim456',events:['event1 \r','test2 \r','test3 \r']}));
store.dispatch(addCase({mimNum:'mim789',events:['event1 \r','test2 \r','test3 \r'], createAt:1000}));

const state = store.getState();
console.log(state)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
