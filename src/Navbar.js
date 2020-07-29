import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <ul>
<Link to="/Home">Home</Link>
<Link to="/Category">Category</Link>
<Link to="/Products">Products</Link>
<Link to="/Login">AdminArea</Link>
</ul>
    </div>
  );
}

export default Navbar;
