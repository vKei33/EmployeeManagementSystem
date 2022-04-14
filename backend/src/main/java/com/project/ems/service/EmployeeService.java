package com.project.ems.service;

import com.project.ems.model.Employee;
import com.project.ems.model.Role;

import java.util.List;

public interface EmployeeService {

    Employee get(Long id);

    List<Employee> getAll();

    Employee insertEmployee(Employee employee);

    Employee updateEmployee(Long id, Employee employee);

    void deleteEmployee(Long id);

}
