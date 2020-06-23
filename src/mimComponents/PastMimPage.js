import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import getVisiableCases from '../selector/mimCases';
import { addCase } from '../actions/mimCases';
import CaseDashBoard from '../pastMimComponents/CaseDashBoard';

const store = configureStore();

store.dispatch(addCase({mimNum:'mim123',events:['test1 \r','test2 \r','test3 \r'], createAt:1592911792000}));
store.dispatch(addCase({mimNum:'mim456',events:['event1 \r','test2 \r','test3 \r']}));
store.dispatch(addCase({mimNum:'mim789',events:['event1 \r','test2 \r','test3 \r'], createAt:1000}));

const state = store.getState();
console.log(state)
// const visible = getVisiableCases(state.cases);

const PastMim = () => (
    <div>
        {/* This is from  mim man page */}
        <Provider store={store}>
           <CaseDashBoard/>
        </Provider>
    </div>
)

export default (PastMim);