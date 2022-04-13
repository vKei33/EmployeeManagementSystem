package com.project.ems.controller;

import com.project.ems.model.Employee;
import com.project.ems.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/all")
    public List<Employee> getAll() {
        return this.employeeService.getAll();
    }

    @GetMapping("/{id}")
    public Employee get(@PathVariable Long id) {
        return this.employeeService.get(id);
    }

    @PostMapping("/add")
    public String insertEmployee(@RequestBody Employee employee) {
        this.employeeService.insertEmployee(employee);
        return "New Employee: " + employee.getName() + " " + employee.getSurname();
    }

    @PutMapping("/{id}/edit")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        this.employeeService.updateEmployee(id, employee);
        return "Updated: " + employee.getName() + " " + employee.getSurname();
    }


    @DeleteMapping("/{id}/delete")
    public String deleteEmployee(@PathVariable Long id) {
        this.employeeService.deleteEmployee(id);
        return "Successfully deleted!";
    }
}
