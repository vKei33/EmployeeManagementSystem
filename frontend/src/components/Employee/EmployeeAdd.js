import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Layout/Sidebar";

const EmployeeAdd = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSurname, setEmployeeSurname] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeRole, setEmployeeRole] = useState("");
  const [employeeWeeklyHours, setEmployeeWeeklyHours] = useState(0);
  const [employeeHourlyRate, setEmployeeHourlyRate] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      name: employeeName,
      surname: employeeSurname,
      email: employeeEmail,
      role: employeeRole,
      weeklyHours: employeeWeeklyHours,
      hourlyRate: employeeHourlyRate,
    };
    console.log(employee);
    axios
      .post("http://localhost:8080/api/employee/add", employee, {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">New Employee</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="employeeName"
                  placeholder="John"
                  autocomplete="off"
                  required
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
                <label htmlFor="employeeName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="employeeSurname"
                  placeholder="Doe"
                  autocomplete="off"
                  required
                  onChange={(e) => setEmployeeSurname(e.target.value)}
                />
                <label htmlFor="employeeSurname">Surname</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="employeeEmail"
                  placeholder="employee@mail.com"
                  autocomplete="off"
                  required
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                />
                <label htmlFor="employeeEmail">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="employeeRole"
                  placeholder="SOFTWARE_DEVELOPER"
                  autocomplete="off"
                  required
                  onChange={(e) => setEmployeeRole(e.target.value)}
                />
                <label htmlFor="employeeRole">Role</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="employeeWeeklyHours"
                  placeholder="4"
                  autocomplete="off"
                  required
                  onChange={(e) => setEmployeeWeeklyHours(e.target.value)}
                />
                <label htmlFor="employeeWeeklyHours">Weekly Hours</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="employeeHourlyRate"
                  placeholder="4.5"
                  autocomplete="off"
                  required
                  onChange={(e) => setEmployeeHourlyRate(e.target.value)}
                />
                <label htmlFor="employeeHourlyRate">Hourly Rate</label>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-lg btn-outline-success">
                Confirm
              </button>
              <Link to={"/"} className="btn btn-lg btn-outline-danger">
                Back
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EmployeeAdd;
