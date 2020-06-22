import { createStore, combineReducers } from 'redux';
import mimCaseseReducer from '../reducers/mimCases';
import filterReducer from '../reducers/filters';

export default () => {
    
    const store = createStore (
        combineReducers({
            cases: mimCaseseReducer,
            filters: filterReducer
        })
    );
    return store;
};