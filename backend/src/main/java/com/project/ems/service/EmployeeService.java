package com.project.ems.service;

import com.project.ems.model.Employee;
import com.project.ems.model.Role;

import java.util.List;

public interface EmployeeService {

    Employee get(Long id);

    List<Employee> getAll();

    Employee insertEmployee(Employee employee);

//    Employee insertEmployee(String name, String surname, String email, Role role, Integer weeklyHours,
//                            Integer hourlyRate, Integer weeklySalary);

    Employee updateEmployee(Long id, Employee employee);

//    Employee updateEmployee(Long id, String name, String surname, String email, Role role, Integer weeklyHours,
//                            Integer hourlyRate, Integer weeklySalary);

    void deleteEmployee(Long id);

}
