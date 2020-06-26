import React from 'react';
import CaseForm from './CaseForm';
import { connect } from 'react-redux';
import { addCase} from '../actions/mimCases';

const AddCasePage = (props) => {
    return (
        <div>
        <CaseForm
            onSubmit= { (casee) => {
                console.log(casee);
                props.dispatch(addCase(casee));
                props.history.push('/mim-man');
            }}
            />
    </div>
    )
};


export default connect()(AddCasePage);