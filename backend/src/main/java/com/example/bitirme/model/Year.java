package com.example.bitirme.model;

import jakarta.persistence.*;

@Entity
@Table(name = "years")
public class Year {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int year;

    // Constructors, getters, and setters

    public Year() {}

    public Year(int year) {
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}