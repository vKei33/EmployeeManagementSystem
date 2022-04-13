import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-person-workspace"></i>
              &nbsp; <Link to={"/"}>Employees</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
