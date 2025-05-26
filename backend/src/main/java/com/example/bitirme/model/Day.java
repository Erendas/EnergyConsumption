package com.example.bitirme.model;

import jakarta.persistence.*;

@Entity
@Table(name = "days")
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int day;

    @ManyToOne
    @JoinColumn(name = "month_id", nullable = false)
    private Month month;

    // Constructors, getters, and setters

    public Day() {}

    public Day(int day, Month month) {
        this.day = day;
        this.month = month;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public Month getMonth() {
        return month;
    }

    public void setMonth(Month month) {
        this.month = month;
    }
}