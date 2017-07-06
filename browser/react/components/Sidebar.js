import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to="/albums">BUMS</Link>
        </h4>
        <h4 className="menu-item active">
          <Link to="/artists">TISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
};

export default Sidebar;
