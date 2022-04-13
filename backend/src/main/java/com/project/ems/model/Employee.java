package com.project.ems.model;

import lombok.Data;
import org.hibernate.annotations.Formula;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String surname;

    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    private Integer weeklyHours;

    private Integer hourlyRate;

    @Formula("weekly_hours*hourly_rate") // kako vo baza
    private Integer weeklySalary;

    public Employee() {
    }

    public Employee(String name, String surname, String email, Role role, Integer weeklyHours, Integer hourlyRate,
                    Integer weeklySalary) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.weeklyHours = weeklyHours;
        this.hourlyRate = hourlyRate;
        this.weeklySalary = weeklySalary;
    }

//    public Integer getWeeklySalary() {
//        return this.getWeeklyHours() * this.getHourlyRate();
//    }
}
