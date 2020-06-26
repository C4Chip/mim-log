import React from 'react';
import { NavLink } from 'react-router-dom';

const JumpAddCase = () => {
  return (
    <div>
      <button className="big-button">
          <NavLink to="/add" exact={true}>Add MIM</NavLink>
      </button>
    </div>
  );
};

export default JumpAddCase;
