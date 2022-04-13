package com.project.ems.service.impl;

import com.project.ems.model.Employee;
import com.project.ems.model.Role;
import com.project.ems.model.exceptions.InvalidEmployeeIdException;
import com.project.ems.repository.EmployeeRepository;
import com.project.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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

//    @Override
//    @Transactional
//    public Employee insertEmployee(String name, String surname, String email, Role role, Integer weeklyHours,
//                                   Integer hourlyRate, Integer weeklySalary) {
//        Employee employee = new Employee(name, surname, email, role, weeklyHours, hourlyRate, weeklyHours * hourlyRate);
//
//        return this.employeeRepository.save(employee);
//    }

    @Override
    public Employee insertEmployee(Employee employee) {
//        Employee emp = new Employee(
//                employee.getName(),
//                employee.getSurname(),
//                employee.getEmail(),
//                employee.getRole(),
//                employee.getWeeklyHours(),
//                employee.getHourlyRate(),
//                employee.getWeeklySalary());
        return this.employeeRepository.save(employee);
    }

//    @Override
//    public Employee updateEmployee(Long id, String name, String surname, String email, Role role, Integer weeklyHours,
//                                   Integer hourlyRate, Integer weeklySalary) {
//        Employee employee = this.employeeRepository.findById(id).orElseThrow(InvalidEmployeeIdException::new);
//
//        employee.setName(name);
//        employee.setSurname(surname);
//        employee.setEmail(email);
//        employee.setRole(role);
//        employee.setWeeklyHours(weeklyHours);
//        employee.setHourlyRate(hourlyRate);
//        employee.setWeeklySalary(hourlyRate * weeklyHours);
//
//        return this.employeeRepository.save(employee);
//    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Employee emp = this.employeeRepository.findById(id).orElseThrow(InvalidEmployeeIdException::new);

        emp.setName(employee.getName());
        emp.setSurname(employee.getSurname());
        emp.setEmail(employee.getEmail());
        emp.setRole(employee.getRole());
        emp.setWeeklyHours(employee.getWeeklyHours());
        emp.setHourlyRate(employee.getHourlyRate());
//        emp.setWeeklySalary(employee.getHourlyRate() * employee.getWeeklyHours());

        return this.employeeRepository.save(emp);
    }

    @Override
    public void deleteEmployee(Long id) {
        this.employeeRepository.deleteById(id);
    }
}
