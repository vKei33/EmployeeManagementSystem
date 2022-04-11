import React from "react";
import Sidebar from "../Layout/Sidebar";

const Employees = () => {
  return (
    <>
      <div classNameName="container-fluid">
        <div classNameName="row">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Employees</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-primary">
                    New Employee
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Employees;
