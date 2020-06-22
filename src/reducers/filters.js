import moment from 'moment';

const filterReducerDefaultState = {
    startDate:undefined,
    endDate:undefined
};

const fileterReducer = (state=filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_STARTDATE':
            return{
                ...state,
                startDate: action.date
            }
        case 'SET_ENDDATE':
            return{
                ...state,
                startDate: action.date
            }
        default:
            return state;
    }
}

export default fileterReducer;