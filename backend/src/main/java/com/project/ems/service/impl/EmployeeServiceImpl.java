package com.project.ems.service.impl;

import com.project.ems.model.Employee;
import com.project.ems.model.exceptions.InvalidEmployeeIdException;
import com.project.ems.repository.EmployeeRepository;
import com.project.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee get(Long id) {
        return this.employeeRepository.findById(id).orElseThrow(InvalidEmployeeIdException::new);
    }

    @Override
    public List<Employee> getAll() {
        return this.employeeRepository.findAll();
    }

    @Override
    public Employee insertEmployee(Employee employee) {
        return this.employeeRepository.save(employee);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Employee emp = this.employeeRepository.findById(id).orElseThrow(InvalidEmployeeIdException::new);

        emp.setName(employee.getName());
        emp.setSurname(employee.getSurname());
        emp.setEmail(employee.getEmail());
        emp.setRole(employee.getRole());
        emp.setWeeklyHours(employee.getWeeklyHours());
        emp.setHourlyRate(employee.getHourlyRate());

        return this.employeeRepository.save(emp);
    }

    @Override
    public void deleteEmployee(Long id) {
        this.employeeRepository.deleteById(id);
    }
}
