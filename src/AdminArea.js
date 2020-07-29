import React, { useState } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Admin from "./admin";
import PrivateRoute from "./privateRoute";

function AdminArea(e) {
  const [connected, setConnected] = useState(false);
  
  return (
    <div>
      <p>You must log in to view the page at /admin</p>
      <Link to="/admin" >
        <button onClick={() => setConnected(true)}>Log in</button>
      </Link>

      {/* <PrivateRoute path="/admin" connected={connected} component={Admin} /> */}
    </div>
  );
}

export default AdminArea;
