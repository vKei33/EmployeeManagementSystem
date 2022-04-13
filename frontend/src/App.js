import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EmployeeEdit from "./components/Employee/EmployeeEdit";
import EmployeeList from "./components/Employee/EmployeeList";
import EmployeeAdd from "./components/Employee/EmployeeAdd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeList />} />
          <Route exact path="employee/add" element={<EmployeeAdd />} />
          <Route exact path="employee/:id/edit" element={<EmployeeEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
