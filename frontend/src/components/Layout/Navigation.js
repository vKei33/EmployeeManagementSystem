import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navigation = () => {
  return (
    <>
      <header class="navbar navbar-light bg-light sticky-top flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Employee Management System
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">
              <Link to={"/"} className="btn btn-primary">
                Sign Out
              </Link>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
