import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Layout/Sidebar";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/all`)
      .then((res) => {
        console.log(res);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id, event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/api/employee/${id}/delete`)
      .then((res) => {
        alert("Successfully Deleted! ", res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Employees</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <a type="button" className="btn btn-sm btn-outline-primary">
                  <Link to={"/employee/add"}>Add Employee</Link>
                </a>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-sm align-middle">
              <thead>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Weekly Hours</th>
                  <th scope="col">Hourly Rate</th>
                  <th scope="col">Weekly Salary</th>
                  <th scope="col" className="text-center">
                    X
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <Link to={"/employee/" + employee.id + "/edit"}>
                        {employee.name} {employee.surname}
                      </Link>
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                    <td>{employee.weeklyHours}</td>
                    <td>{employee.hourlyRate}</td>
                    <td>{employee.weeklySalary}</td>
                    <td className="text-center">
                      <button
                        onClick={(event) => handleDelete(employee.id, event)}
                        className="btn btn-danger"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                      {/* <Link
                        to={"/employee/" + employee.id + "/delete"}
                        className="btn btn-danger"
                      >
                        <i class="bi bi-trash"></i>
                      </Link> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeList;
