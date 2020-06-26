
//mimCasese reducer

const mimCasesesReducerDefaultState = [];

const mimCaseseReducer = (state=mimCasesesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_CASE':
            return [...state, action.casee];
        case 'REMOVE_CASE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_CASE':
            return state.map( (exp) => {
                if (exp.id == action.id) {
                    return {
                        ...exp,
                        ...action.update
                    };
                }else {
                    return exp;
                }
            })
        default:
            return state;
    }
}

export default mimCaseseReducer;