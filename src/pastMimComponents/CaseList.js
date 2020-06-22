import React from 'react';
import CaseListItem from './CaseListItem';
import Header from '../mimComponents/Header';
import getVisiableCases from '../selector/mimCases';
import { connect } from 'react-redux';

const CaseList = (props) => (
    <div>
        <Header subtitle={'For a better mim experience'} />
        <div className="container">
            <div className="widget">
                
                {props.cases.map( (item) => {
                return <CaseListItem key={item.id} {...item} />;
                })}
                
            </div>
        </div>
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        cases: getVisiableCases(state.cases, state.filters)
    };
};

export default connect(mapStateToProps)(CaseList);

