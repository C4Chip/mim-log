import React from 'react';
import { NavLink } from 'react-router-dom';

const JumpMimMan = () => {
  return (
    <div>
      <button className="big-button">
          <NavLink to="/mim-man" exact={true}>MIM Management</NavLink>
      </button>
    </div>
  );
};

export default JumpMimMan;
