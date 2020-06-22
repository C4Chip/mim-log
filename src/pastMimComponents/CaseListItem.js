import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCase } from '../actions/mimCases';

const CaseListItem = ({dispatch, id, mimNum, events, createAt}) => {

    const createtime = moment(createAt);

    return (
    <div className="event">
        <h3 className="event__text">
            <p>
                <Link to={`/edit/${id}`}>
                    {mimNum}
                </Link>
            </p>

            <p>
                {createtime.toString().concat('\r')}
            </p>

                {/* <li>{events}</li> */}
                {events.map( (event,id) => {
                    return <p key={id}>{id+1} - {event}</p>
                })
                }
            
        </h3>

        <button 
        className="button button--link"
        onClick={ () =>{
            dispatch(removeCase({id}))
        }}>Remove</button>
    </div>)
}

export default connect()(CaseListItem);