import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";
import Employees from "./components/Employee/Employees";
import EmployeeAdd from "./components/Employee/EmployeeAdd";
import EmployeeEdit from "./components/Employee/EmployeeEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="employee/all" element={<Employees />} />
          <Route exact path="employee/add" element={<EmployeeAdd />} />
          <Route exact path="employee/:id/edit" element={<EmployeeEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
