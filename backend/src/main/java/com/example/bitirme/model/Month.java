package com.example.bitirme.model;

import jakarta.persistence.*;

@Entity
@Table(name = "months")
public class Month {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int month;

    @ManyToOne
    @JoinColumn(name = "year_id", nullable = false)
    private Year year;

    // Constructors, getters, and setters

    public Month() {}

    public Month(int month, Year year) {
        this.month = month;
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public Year getYear() {
        return year;
    }

    public void setYear(Year year) {
        this.year = year;
    }
}