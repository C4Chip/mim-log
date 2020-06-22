import {v4 as uuidv4} from 'uuid';

//add case action
export const addCase = ( {mimNum='', events=[], createAt=0 } = {}) => {
    return {
        type: 'ADD_CASE',
        case: {
            id: uuidv4(),
            mimNum,
            events,
            createAt
        }
    }
};

//remove 
export const removeCase = ({id} = {}) =>({
    type:'REMOVE_CASE',
    id
})

//edit
export const editCase = (id,update) => ({
    type: 'EDIT_CASE',
    id,
    update
})