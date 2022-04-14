import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";

const EmployeeEdit = () => {
  const [employee, setEmployee] = useState([]);

  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/${id}`)
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const empObj = {
      name: employee.name,
      surname: employee.surname,
      email: employee.email,
      role: employee.role,
      weeklyHours: employee.weeklyHours,
      hourlyRate: employee.hourlyRate,
    };
    console.log(empObj);
    axios
      .put(`http://localhost:8080/api/employee/${id}/edit`, empObj, {
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
            <h1 className="h2">Edit Employee</h1>
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
                  value={employee.name}
                  onChange={(e) =>
                    setEmployee({ ...employee, name: e.target.value })
                  }
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
                  value={employee.surname}
                  onChange={(e) =>
                    setEmployee({ ...employee, surname: e.target.value })
                  }
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
                  value={employee.email}
                  onChange={(e) =>
                    setEmployee({ ...employee, email: e.target.value })
                  }
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
                  value={employee.role}
                  onChange={(e) =>
                    setEmployee({ ...employee, role: e.target.value })
                  }
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
                  value={employee.weeklyHours}
                  onChange={(e) =>
                    setEmployee({ ...employee, weeklyHours: e.target.value })
                  }
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
                  value={employee.hourlyRate}
                  onChange={(e) =>
                    setEmployee({ ...employee, hourlyRate: e.target.value })
                  }
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

export default EmployeeEdit;
